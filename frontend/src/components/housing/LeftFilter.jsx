import React from 'react'

export default function LeftFilter() {
  return (
    <div>  
        <div class="filters-container">
            <h1>Фильтры</h1>
            
            <div class="filter-group">
                <h2>Тип сделки</h2>
                <div class="filter-option">
                    <input type="checkbox" id="all-deals" checked/>
                    <label for="all-deals">Все</label>
                </div>
                <div class="filter-option">
                    <input type="checkbox" id="direct-sale"/>
                    <label for="direct-sale">Прямая продажа</label>
                </div>
                <div class="filter-option">
                    <input type="checkbox" id="agency-sale"/>
                    <label for="agency-sale">Через агентство</label>
                </div>
            </div>
            
            <div class="filter-group">
                <h2>Статус верификации</h2>
                <div class="filter-option">
                    <input type="checkbox" id="community-verified"/>
                    <label for="community-verified">Верифицировано сообществом</label>
                </div>
                <div class="filter-option">
                    <input type="checkbox" id="notary-verified"/>
                    <label for="notary-verified">Проверено нотариусом</label>
                </div>
            </div>
            
            <div class="filter-group">
                <h2>Район</h2>
                <div class="filter-option">
                    <input type="checkbox" id="central-district"/>
                    <label for="central-district">Центральный</label>
                </div>
                <div class="filter-option">
                    <input type="checkbox" id="soviet-district"/>
                    <label for="soviet-district">Советский</label>
                </div>
                <div class="filter-option">
                    <input type="checkbox" id="volga-district"/>
                    <label for="volga-district">Приволжский</label>
                </div>
            </div>
            
            <button class="reset-button">Сбросить фильтры</button>
        </div>
    </div>
  )
}
