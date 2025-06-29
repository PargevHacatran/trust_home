from nlp_processing import RobustFraudDetector
from typing import Dict, Any
from numberic_analysis import calculate_fraud_risk

def analyze_real_estate_ad(ad_data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Анализирует объявление о недвижимости на мошенничество
    
    Args:
        ad_data: Словарь с данными объявления
            {
                "description": "Текст объявления",
                "price": Цена (число),
                "sq_m": Площадь (число),
                ... (другие поля)
            }
    
    Returns:
        Словарь с результатами анализа:
        {
            "fraud_probability": Вероятность мошенничества (0-1),
            "is_risky": Флаг риска (bool),
            "price_per_sqm": Цена за кв.м,
            "red_flags": Список найденных красных флагов
        }
    """
    detector = RobustFraudDetector()
    
    # Основной анализ текста
    text = ad_data.get("description", "")
    fraud_prob = detector.predict(text)
    
    # Дополнительные метрики
    price = ad_data.get("price", 0)
    sq_m = ad_data.get("sq_m", 1)  # Защита от деления на 0
    price_per_sqm = price / sq_m if sq_m > 0 else 0
    
    # Определение красных флагов
    red_flags = []
    if fraud_prob >= 0.7:
        red_flags.append("high_fraud_probability")
    if price_per_sqm < 50000:  # Пример проверки аномально низкой цены
        red_flags.append("suspiciously_low_price")
    
    return fraud_prob

def analyze_nums (price, sqm, developer_stars, market_min, market_max):
    risk = calculate_fraud_risk(
        total_price=price,
        sqm=sqm,
        developer_stars=developer_stars,
        market_min=market_min,
        market_max=market_max
    )

    print(risk)

    return risk 

if __name__ == "__main__":
    sample_ad = {
        "description": "Срочно продам элитную квартиру! Без комиссии! 100% гарантия!",
        "price": 1500000,
        "sq_m": 45,
        "location": "Москва"
    }

    ad = {
        'price': 2_400_000,
        'sqm': 45,
        'developer_stars': 2.3
    }
    
    desc_risk = analyze_real_estate_ad(sample_ad)
    nums_risk = analyze_nums(price=ad["price"], sqm=ad["sqm"], developer_stars=ad["developer_stars"], market_min=49000, market_max=279000)
    image_risk = 0.1

    risk = (1.15 * desc_risk + 1.15 * nums_risk + 0.2 * image_risk) / 2.5

    print(risk)
