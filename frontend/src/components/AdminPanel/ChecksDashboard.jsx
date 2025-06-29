import React from 'react'


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
  }];


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

export default function ChecksDashboard () {

  return (
    <div>
        <nav className="nav_admin">
          <div className="nav_admin__title">
            <h3>Документы</h3>
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
        </nav>        
    </div>
  )
}
