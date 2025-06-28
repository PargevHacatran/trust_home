  import React, { useEffect, useState } from 'react';
  import './YandexMap.css';

  const YandexMap = () => {
    const [isMapReady, setIsMapReady] = useState(false);
    const [mapInitialized, setMapInitialized] = useState(false);
    const [coordinates, setCoordinates] = useState([44.987692, 38.932787]);

  const geosuggestApiUrl = 'https://api.geosuggest.io/v1/search';

  const getCoordinatesFromGeosuggest = async (address) => {
    try {
      const response = await fetch(`${geosuggestApiUrl}?text=${encodeURIComponent(address)}&key=7b7f5ae9-0f0e-4b75-bc98-f73c6121047f`);
      const data = await response.json();
      if (data && data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setCoordinates([lat, lng]);
      } else {
        console.warn('No results found for the address');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  useEffect(() => {
    // Проверяем, загружен ли объект ymaps
    if (window.ymaps) {
      window.ymaps.ready(() => {
        setIsMapReady(true); // Устанавливаем флаг, что API готово
      });
    } else {
      // Загружаем скрипт Яндекс.Карт, если ymaps не найден
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=7b7f5ae9-0f0e-4b75-bc98-f73c6121047f';
      script.onload = () => {
        window.ymaps.ready(() => {
          setIsMapReady(true);
        });
          script.controls.remove('searchControl');
      };
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (isMapReady && !mapInitialized) {
      // Инициализируем карту внутри ready()
      const map = new window.ymaps.Map('map', {
        center: coordinates,
        zoom: 15,
      });

      const placemark = new window.ymaps.Placemark(coordinates, {
        balloonContent: 'Республика Адыгея, Тахтамукайский район, п.г.т Яблоновский, улица Калинина, 2/1',
      });

      map.geoObjects.add(placemark);
      map.controls.remove('searchControl');
      setMapInitialized(true); // После инициализации устанавливаем флаг
    }
  }, [isMapReady, mapInitialized, coordinates]);

  useEffect(() => {
    // Выполняем запрос на геокодирование только один раз при загрузке
    getCoordinatesFromGeosuggest('Республика Адыгея, Тахтамукайский район, п.г.т Яблоновский, улица Калинина, 2/1');
  }, []);

  return (
    <div id="map" className="map"></div>
  );
};

export default YandexMap;