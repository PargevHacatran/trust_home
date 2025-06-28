
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>ТрастДом</h2>
          <p>Платформа для безопасной<br />покупки и продажи недвижимости<br />без посредников.</p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Навигация</h4>
            <ul>
              <li>О платформе</li>
              <li>Найти жильё</li>
              <li>Проверенные продавцы</li>
              <li>Услуги и верификация</li>
              <li>Сообщество</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Полезные ссылки</h4>
            <ul>
              <li>Блог</li>
              <li>Гайды и руководства</li>
              <li>Часто задаваемые вопросы</li>
              <li>Правила сервиса</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li>info@trustdom.ru</li>
              <li>+7 (495) 123-45-67</li>
              <li>Telegram-сообщество</li>
              <li>Discord-канал</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2023 ТрастДом. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;