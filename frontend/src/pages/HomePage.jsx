  import React from "react";
  import presentation from '../../public/img/presentation.png'
  import Items from "../components/Items";
  import Reputation from "../components/Reputation";
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
import YandexMap from "../components/YandexMaps/YandexMap";
import TelegramBot from "../components/TelegramBot";
function Home() {
    return (
      <>
        <Navbar />
          <div className="home-container">
            <TelegramBot/>
            <section className="hero">
              <img className="hero-img" src={presentation} alt="Presentation" />

              <div className="hero-content">
                <h1>Покупка квартиры без фейков, страхов и посредников</h1>
                <p>Доверие. Проверка. Сделка напрямую</p>
                <div className="filters">
                  <label>Город
                    <select>
                      <option>Москва</option>
                    </select>
                  </label>
                  <label>Тип объекта
                    <select>
                      <option>Квартира</option>
                    </select>
                  </label>
                  <label>Застройщик
                    <select>
                      <option>Все застройщики</option>
                    </select>
                  </label>
                  <label>Тип жилья
                    <select>
                      <option>Все типы</option>
                    </select>
                  </label>
                  <button className="cta-button">🔍 Найти жильё</button>
                </div>
              </div>
            </section>
         
            <section className="verified-listings section-wrapper">
              <h2 className="verified-listings_title">Верифицированные объекты</h2>
              <p className="verified-listings_desc">Каждое объявление проходит тщательную проверку и имеет полную <br />  историю объекта</p>
          <Items/>     
          <div className="YandexMap">
            <h3>Интерактивная карта</h3>
           <YandexMap/>       
          </div>

          
            </section>

            <section className="reputation section-wrapper">
            <Reputation/>
            </section>






          <footer className="cta-footer">
          <div className="cta-footer-content">
            <h2 className="cta-footer-title">Готовы начать безопасный поиск жилья?</h2>
            <p className="cta-footer-description">Присоединяйтесь к тысячам пользователей, которые уже нашли свой дом на нашей платформе.</p>
            <div className="cta-footer-buttons">
              <a href="#" className="cta-footer-btn cta-footer-btn-primary">Зарегистрироваться</a>
              <a href="#" className="cta-footer-btn cta-footer-btn-secondary">Начать поиск</a>
            </div>
          </div>
        </footer>
      </div>
      <Footer/>
    </>
    );
  }

  export default Home;
