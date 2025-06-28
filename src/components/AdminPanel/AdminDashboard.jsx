// AdminDashboard.jsx
import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import "./AdminDashboard.css";
import apartment from '../../../public/icons/apartment.svg';
import  house from '../../../public/icons/house.svg';
import  handshakeBlue from '../../../public/icons/handshakeBlue.svg';
import rubles from '../../../public/icons/rubles.svg';
import star from '../../../public/icons/star.svg';
// import apartment from '../../../public/icons/apartment.svg';
// import apartment from '../../../public/icons/apartment.svg';

const developers = [
  {
    name: "ПИК",
    company: "ООО «ПИК-Специализированный застройщик»",
    status: "Активен",
    count: 32,
    sales: "145M ₽",
    avg: "8.2M ₽",
  },
  {
    name: "Самолет",
    company: "ООО «Самолет-Девелопмент»",
    status: "Активен",
    count: 24,
    sales: "98M ₽",
    avg: "7.5M ₽",
  },
  {
    name: "Инград",
    company: "АО «Инград»",
    status: "На проверке",
    count: 18,
    sales: "76M ₽",
    avg: "6.8M ₽",
  },
  {
    name: "А101",
    company: "ООО «А101 Девелопмент»",
    status: "Заблокирован",
    count: 12,
    sales: "45M ₽",
    avg: "5.4M ₽",
  },
];
const checks =[
  {
    number: '#ААА-2021-122',
    name: 'ПИК',
    company: 'ООО «ПИК-Специализированный застройщик»',
    summa: '8.2M ₽',
    status: 'Завершено',
    verifid: 'Верефицированно',
  },
  {
    number: '#ААА-2021-122',
    name: 'ПИК',
    company: 'ООО «ПИК-Специализированный застройщик»',
    summa: '8.2M ₽',
    status: 'Заплонирован',
    verifid: 'Верефицированно',
  },
  {
    number: '#ААА-2021-122',
    name: 'ПИК',
    company: 'ООО «ПИК-Специализированный застройщик»',
    summa: '8.2M ₽',
    status: 'В процессе',
    verifid: 'Верефицированно',
  },
  
  
]
function StatusBadge({ status }) {
  const statusClass = {
    "Активен": "status-active",
    "На проверке": "status-pending",
    "Заблокирован": "status-blocked",
    "Завершено": "status-end",
    "В процессе": "status-pending",
    "Заплонирован": "status-sealed",
  }[status] || "status-default";

  return <span className={`status-badge ${statusClass}`}>{status}</span>;
}





export default function AdminDashboard() {
  return (
    <>
    <Dashboard>
      <nav className="nav_admin">
      <div className="nav_admin__title">
        <h3>Dashboard</h3></div>
      </nav>
      <div className="dashboard-wrapper">
        <div className="stats-grid">
          <StatCard title="Застройщики" value="42" change="+5%" img={apartment} />
          <StatCard title="Объекты" value="156" change="+12%" img={house}/>
          <StatCard title="Сделки" value="87" change="+8%" img = {handshakeBlue}/>
          <StatCard title="Продажи" value="456M ₽" change="+15%" img = {rubles}/>
        </div>

        <div className="developers-block">
          <div className="block-header">
            <h2>Застройщики</h2>
            <button className="add-btn">Добавить застройщика</button>
          </div>


          <table className="dev-table">
            <thead>
              <tr>
                <th>Застройщик</th>
                <th>Статус</th>
                <th>Объекты</th>
                <th>Продажи</th>
                <th>Средний чек</th>
              </tr>
            </thead>
            <tbody>
              {developers.map((dev, i) => (
                <React.Fragment key={i}>
                  <tr className="group-header">
                    <td colSpan="7"><strong>{dev.name}</strong></td>
                  </tr>
                  <tr>
                    <td>{dev.company}</td>
                    <td><StatusBadge status={dev.status} /></td>
                    <td>{dev.count}</td>
                    <td>{dev.sales}</td>
                    <td>{dev.avg}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>


            <div className="block-header_docs">
                <h2>Последние договоры</h2>
              <button className="add-btn">Все договоры</button>
          </div>
            <table className="dev-table_docs">
            <thead>
              <tr>
                <th>Номер</th>
                <th>Застройщик</th>
                <th>Объект</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Проверено</th>
              </tr>
            </thead>
            <tbody>
              {checks.map((check, i) => (
                <React.Fragment key={i}>
                  <tr className="group-header">
                  </tr>
                    <tr>
                    <td>{check.number}</td>
                    <td>{check.name}</td>
                    <td>{check.company}</td>
                    <td>{check.summa}</td>
                    <td><StatusBadge status={check.status} /></td>
                    <td>{check.verifid}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </Dashboard>
      </>
  );
}

function StatCard({ title, value, change, img}) {
  return (
    <div className="stat-card">
      <div className="stat-img"><img src={img} alt="" /></div>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-change">{change} за месяц</div>
    </div>
  );
}