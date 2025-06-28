import React from 'react'
import Dashboard from './Dashboard/Admin';
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
function StatusBadge({ status }) {
  const statusClass = {
    "Активен": "status-active",
    "На проверке": "status-pending",
    "Заблокирован": "status-blocked",       
  }[status] || "status-default";

  return <span className={`status-badge ${statusClass}`}>{status}</span>;
}

export default function DeveloperTable() {
  return (
    <div>
            <nav className="nav_admin">
                <div className="nav_admin__title">
                    <h3>Застройщики</h3></div>
                    
                <div className="nav_admin__input">
                <input type="text" name="" id="" placeholder="Поиск застройщика" /></div>
            </nav>
            <div className="dashboard-wrapper">
                <div className="developers-block">
                    <div className="block-header">
                         <div className="addDev">

                      <button className="add-btn">Добавить застройщика</button></div>
                      <div className="sorting">
                        <p>Сортировка</p>
                        <select name="" id="">
                          <option value="name">По названию</option>
                          <option value="dage">По дате</option>
                        </select>
                      </div>
                    </div>
       

                    <table className="dev-table">
                        <thead>
                        <tr>
                            <th>Застройщик</th>
                            <th>Статус</th>
                            <th>Объекты</th>
                            <th>Продажи</th>
                            <th>Рейтинг</th>
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
                                <td>★ ★ ★ ★ ★   </td>
                                <td>{dev.avg}</td>
                            </tr>
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
  )
}
