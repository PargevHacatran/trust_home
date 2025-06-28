import { TableHeaderColumn } from "./TableHeaderColumn"

import styles from "../../../styles/developer.module.css";

export const TableHeaderRow = ({ mainColumnName, columnsList }) => {
    return (
        <div className={styles.contacts_table_header_row}>
            <div className={styles.contacts_main_column_wrapper}>
                <div>
                    <p className={styles.contacts_main_column}>{ mainColumnName }</p>
                </div>
            </div>

            {
                columnsList.map((item, index) => (
                    <TableHeaderColumn
                        key={index}    
                        text={item}
                    />
                ))

            }
            <div className={styles.contacts_action_column}>
                <p className={styles.contacts_main_column}>Действия</p>            
            </div>
        </div>
    )
}