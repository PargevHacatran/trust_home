import re
import numpy as np
from transformers import pipeline

class RobustFraudDetector:
    def __init__(self):
        # Только проверенные PyTorch-модели
        self.models = {
            'toxic': self._load_model("cointegrated/rubert-tiny-toxicity"),
            'sentiment': self._load_model("blanchefort/rubert-base-cased-sentiment-rusentiment")
        }
        
        # Усиленные правила для недвижимости
        self.scam_patterns = [
            (r'\b(срочно|гарантия|100%|кид[аеу]|обман|предоплат)\b', 0.7),
            (r'\b(без\s*(комиссии|посредников)|недорого|дешевле\s*рынка)\b', 0.6),
            (r'\b(торг\s*уместен|цен[аы]\s*снижен[аы]|спец\s*цен[аы])\b', 0.5),
            (r'\b(звон[ия]те\s*срочно|только\s*сегодня|успейте)\b', 0.8)
        ]
        
        self.weights = {
            'toxic': 0.5,
            'negative_sentiment': 0.4,
            'scam_patterns': 0.7,
            'text_metrics': 0.3
        }

    def _load_model(self, model_name: str):
        """Безопасная загрузка модели с обработкой ошибок"""
        try:
            return pipeline(
                "text-classification", 
                model=model_name,
                device="cpu"
            )
        except Exception as e:
            print(f"Ошибка загрузки модели {model_name}: {str(e)}")
            return None

    def predict(self, text: str, threshold: float = 0.4) -> float:
        """Улучшенный анализ с обработкой ошибок"""
        try:
            # 1. Анализ моделями
            toxic_score = self._get_score('toxic', text, 'toxic')
            sentiment_score = self._get_score('sentiment', text, 'negative')
            
            # 2. Экспертные правила
            scam_score = self._check_scam_patterns(text)
            
            # 3. Лингвистические метрики
            metrics_score = self._text_metrics(text)
            
            # Взвешенное среднее
            combined = (
                self.weights['toxic'] * toxic_score +
                self.weights['negative_sentiment'] * sentiment_score +
                self.weights['scam_patterns'] * scam_score +
                self.weights['text_metrics'] * metrics_score
            )
            
            return self._sigmoid(combined * 2 - 1)
        except Exception as e:
            print(f"Ошибка анализа: {str(e)}")
            return 0.5  # Возвращаем неопределенное значение при ошибке

    def _get_score(self, model_key: str, text: str, target_label: str) -> float:
        """Получение оценки от конкретной модели"""
        if self.models.get(model_key) is None:
            return 0
            
        try:
            result = self.models[model_key](text[:512])[0]  # Обрезаем длинные тексты
            return result['score'] if result['label'] == target_label else 0
        except:
            return 0

    def _check_scam_patterns(self, text: str) -> float:
        """Проверка по шаблонам мошенничества"""
        text_lower = text.lower()
        total = 0.0
        
        for pattern, weight in self.scam_patterns:
            if re.search(pattern, text_lower):
                total += weight
                
        return min(1.0, total)

    def _text_metrics(self, text: str) -> float:
        """Анализ стилистических особенностей"""
        words = text.split()
        if not words:
            return 0
            
        metrics = {
            'caps': sum(1 for w in words if w.isupper()) / len(words),
            'excl': text.count('!') / len(words),
            'digits': sum(c.isdigit() for c in text) / len(text)
        }
        
        return 0.4*metrics['caps'] + 0.3*metrics['excl'] + 0.3*metrics['digits']

    def _sigmoid(self, x: float) -> float:
        """Нормализация оценки в диапазон 0-1"""
        return 1 / (1 + np.exp(-x))

# Тестирование
if __name__ == "__main__":
    detector = RobustFraudDetector()
    
    tests = [
        ("СРОЧНО! Квартира БЕЗ КОМИССИИ! 100% ГАРАНТИЯ!", 1),
        ("Продам 2-комнатную квартиру в новом доме", 0),
        ("Внимание! Кидаю на деньги! Предоплата 50%!", 1),
        ("Уютная квартира с ремонтом в центре города", 0),
        ("Срочная продажа! Без посредников! Цена ниже рынка!", 1),
        ("Продам квартиру, торг, звоните после 18:00", 0)
    ]
    
    print("🔍 Результаты тестирования улучшенной модели")
    print("Текст".ljust(45) + "| Ожидалось | Получено | Вердикт")
    print("-"*75)
    
    for text, expected in tests:
        prob = detector.predict(text)
        pred = 1 if prob >= 0.4 else 0
        verdict = "✅" if pred == expected else "❌"
        print(f"{text[:42].ljust(45)}| {expected:^9} | {prob:.2f} ({pred}) | {verdict}")