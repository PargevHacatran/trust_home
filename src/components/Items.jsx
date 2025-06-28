import Item from './Item';

const sampleItems = [
  {
    price: '7 800 000 ₽',
    title: '2-комн. квартира, 62 м²',
    type: 'Прямая продажа',
    address: 'ул. Ленина, 24, Центральный район',
    floor: 'Этаж 7 из 12',
    year: '2018',
    seller: 'Александр К.',
    rating: '4.8',
    deals: '12',
    verified: 'Верифицировано'
  },
  {
    price: '12 300 000 ₽',
    title: '3-комн. квартира, 84 м²',
    type: 'Новостройка',
    address: 'ул. Пушкина, 10, ЖК "Парковый"',
    floor: 'Этаж 12 из 24',
    year: '2023',
    seller: 'Михаил В.',
    rating: '4.9',
    deals: '8',
    verified: 'Проверено нотариусом'
  },
  {
    price: '5 450 000 ₽',
    title: '1-комн. квартира, 42 м²',
    type: 'Вторичка',
    address: 'ул. Гагарина, 55, Советский район',
    floor: 'Этаж 3 из 9',
    year: '2010',
    seller: 'Екатерина Л.',
    rating: '4.7',
    deals: '5',
    verified: 'Верифицировано'
  }
];

function Items() {
  return (
    <div className="items-container">
      <div className="items-grid">
        {sampleItems.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
      <button className="view-all">Смотреть все объекты</button>
    </div>
  );
}

export default Items;
