import React from 'react'

export default function Filter() {
  return (
    <div><div className="find-property-container">
      <h1>Найти жильё</h1>
      <p className="property-count">Более 15 000 верифицированных объектов недвижимости</p>
      <div className="find-property-container_main">
      <div className="filters-grid">
        <div className="filter-item">
          <label>Город</label>
          <select defaultValue="Москва">
            <option>Москва</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>Тип объекта</label>
          <select defaultValue="Квартира">
            <option>Квартира</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>Комнат</label>
          <select defaultValue="Любое количество">
            <option>Любое колиfчество</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>Цена до</label>
          <select defaultValue="15 000 000 ₽">
            <option>15 000 000 ₽</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>Площадь от</label>
          <select defaultValue="40 м²">
            <option>40 м²</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>Этаж от</label>
          <select defaultValue="2">
            <option>2</option>
          </select>
        </div>
        
        <div className="filter-item">
          <label>Год постройки от</label>
          <select defaultValue="2010">
            <option>2010</option>
          </select>
        </div>
      </div>
      
        <div className="checkboxes">
          <label className="checkbox-label">
            <input type="checkbox" /> Только верифицированные
          </label>
          <label className="checkbox-label">
            <input type="checkbox" /> Прямые продажи
          </label>
          <label className="checkbox-label">
            <input type="checkbox" /> С фото
          </label>
          <label className="checkbox-label">
            <input type="checkbox" /> Новостройки
          </label>
        </div>
      <button className="find-button">Найти объекты</button>
      </div>


    </div>
    </div>
  )
}
