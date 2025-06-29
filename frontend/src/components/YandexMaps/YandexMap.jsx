import React, { useEffect, useState } from 'react';
import './YandexMap.css';
import dogma from '../../../public/img/map/dogma.jpg';
import tochno from '../../../public/img/map/tochno.jpg';
import south from '../../../public/img/map/south.jpg';

const YandexMap = () => {
  const [isMapReady, setIsMapReady] = useState(false);
  const [mapInitialized, setMapInitialized] = useState(false);

  // Пример координат
  const [coordinates, setCoordinates] = useState([
    [45.109209, 38.916752],
    [45.013390, 39.080434],
    [45.070734, 39.037108]  
  ]);

  useEffect(() => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        setIsMapReady(true);
      });
    } else {

      const script = document.createElement('script');
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
      const map = new window.ymaps.Map('map', {
        center: coordinates[0],
        zoom: 11,
      });

      // Добавляем метки с кастомными иконками
      coordinates.forEach((coord, index) => {
        const placemark = new window.ymaps.Placemark(coord, {
          balloonContent: `Точка ${index + 1}`,
        }, {
          iconLayout: 'default#image',
          iconImageHref: getIconUrl(index), // функция ниже возвращает URL иконки
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -32],
        });
        map.geoObjects.add(placemark);
      });

      map.controls.remove('searchControl');
      setMapInitialized(true);
    }
  }, [isMapReady, mapInitialized, coordinates]);

  // Псевдо-иконки для примера (можно заменить на свои)
  const getIconUrl = (index) => {
    const icons = [
      dogma, //  иконка 1
      tochno, // иконка 2
      south   // иконка 3
    ];
    return icons[index % icons.length];
  };

  return <div id="map" className="map"></div>;
};

export default YandexMap;