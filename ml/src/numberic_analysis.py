import numpy as np

def calculate_fraud_risk(
    total_price: float, 
    sqm: float, 
    developer_stars: float,
    market_min: float, 
    market_max: float
) -> float:
    """
    Анализ мошенничества по 3 параметрам:
    1. Цена за м² относительно рыночной вилки
    2. Площадь квартиры
    3. Рейтинг застройщика (звёзды 1-5)
    
    :param total_price: Общая цена квартиры (руб)
    :param sqm: Площадь (м²)
    :param developer_stars: Рейтинг застройщика (1-5)
    :param market_min: Минимальная рыночная цена за м²
    :param market_max: Максимальная рыночная цена за м²
    :return: Вероятность мошенничества 0-1
    """
    # 1. Расчёт цены за м²
    price_per_sqm = total_price / sqm
    
    # 2. Проверка выхода за рыночную вилку
    if price_per_sqm < market_min:
        price_risk = min(1.0, (market_min - price_per_sqm) / market_min * 3)  # Усиленный коэффициент
    elif price_per_sqm > market_max:
        price_risk = min(1.0, (price_per_sqm - market_max) / market_max * 2)
    else:
        price_risk = 0.0
    
    # 3. Проверка площади (аномально малые/большие квартиры)
    if sqm < 30:
        size_risk = 0.8
    elif sqm > 150:
        size_risk = 0.6
    else:
        size_risk = 0.0
    
    # 4. Рейтинг застройщика (чем меньше звёзд - тем выше риск)
    dev_risk = (5 - developer_stars) / 5  # 1 звезда → 0.8, 5 звёзд → 0
    
    # 5. Комбинированный риск (веса можно настроить)
    total_risk = min(1.0, 
        price_risk * 0.7 + 
        size_risk * 0.2 + 
        dev_risk * 0.4
    )
    
    return round(total_risk, 2)

# Пример использования
market_min = 120_000  # Минимальная цена за м² в районе
market_max = 180_000  # Максимальная цена за м²
