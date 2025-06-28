// components/Reputation.jsx
import calendarIcon from '../../public/icons/calendar.svg';
import inProgressIcon from '../../public/icons/time.svg';
import starIcon from '../../public/icons/star.svg';
import handshakeIcon from '../../public/icons/handshake.svg';
import seller_avatar from '../../public/img/User.png';

function Reputation() {
  return (
    <div className="reputation-container">
      <div className="reputation-left">
        <div className="seller-card">
          <img className= "seller-avatar" src={seller_avatar} alt="Иван Петров" />
          <h2>Dogma</h2>
          <p className="seller-role">Застройщик</p>
          <p className="seller-rating">
            <img src={starIcon} alt="rating" className="icon-inline_star" /> 4.9 <span>(24 отзыва)</span>
          </p>
          <div className="success-deals">
            <img src={handshakeIcon} alt="deals" className="icon-inline" />
            <p>17 успешных сделок</p>
            <span>За 3 года</span>
          </div>
          <div className="review-block">
            <div className="review">
              <p className="review-name">Мария С. <span>2 мес. назад</span></p>
              <p className="review-text">Документы были в идеальном порядке, сделка прошла гладко и быстро.</p>
            </div>
            <div className="review">
              <p className="review-name">Андрей К. <span>4 мес. назад</span></p>
              <p className="review-text">Честный застройщик, всё соответствовало описанию. Немного затянул процесс оформления.</p>
            </div>
            <a href="#" className="all-reviews">Посмотреть все отзывы</a>
          </div>
        </div>
      </div>

      <div className="reputation-right">
        <h3>Цифровая дорожная карта сделки</h3>
        <p className="roadmap-desc">Прозрачный процесс от первого контакта до завершения сделки</p>

        <ol className="roadmap-list">
          <li className="completed">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Просмотр объекта</h4>
              <p>Осмотр объекта лично или через видеосвязь</p>
              <div className="step-meta">
                <img src={calendarIcon} alt="calendar" /> Завершено 15 июня 2023
              </div>
            </div>
          </li>

          <li className="completed">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Проверка документов</h4>
              <p>Юридическая проверка чистоты объекта и документов</p>
              <div className="step-meta">
                <img src={calendarIcon} alt="calendar" /> Завершено 20 июня 2023
              </div>
            </div>
          </li>

          <li className="in-progress">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Задаток</h4>
              <p>Внесение и подтверждение задатка через безопасную сделку</p>
              <div className="step-meta">
                <img src={inProgressIcon} alt="progress" /> В процессе
              </div>
            </div>
          </li>

          <li>
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Оформление сделки</h4>
              <p>Подписание договора купли-продажи и регистрация</p>
              <div className="step-meta">
                <img src={calendarIcon} alt="calendar" /> Запланировано на 10 июля 2023
              </div>
            </div>
          </li>

          <li>
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>Пост-гарантия</h4>
              <p>Период после сделки с гарантией отсутствия скрытых проблем</p>
              <div className="step-meta">
                <img src={calendarIcon} alt="calendar" /> 30 дней после сделки
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Reputation;
