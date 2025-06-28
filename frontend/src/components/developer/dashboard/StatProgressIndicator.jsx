import styles from "../../../styles/developer.module.css";
import { dealsIcon } from "../../../utils/developer/dealsIcons";

export const StatProgressIndicator = ({ isPositive, progressProcent }) => {
    return (
        <div className={styles.stat_progress_indicator_wrapper}>
            <div>
                { isPositive ? dealsIcon.upsStateRow : dealsIcon.downStateRow }    
            </div>  
            <p
                style={{
                    color: isPositive ? "#429482" : "#EA7873"
                }}
            >
                { progressProcent }%
            </p> 
        </div>    
    );
}