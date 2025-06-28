import styles from "../../styles/about.module.css";

export const AboutWorkStep = ({title, description, count, isLast}) => {
    return (
        <div className={styles.about_workstep}>
            <div 
                className={styles.about_workstep_count_wrapper}
                style={{ background: isLast ? "#22C55E" : "#1D4ED8" }}
            >
                <p className={styles.about_workstep_count}>{ count }</p>
            </div>
            <div>
                <h3>{ title }</h3>
                <p>{ description }</p>
            </div>
        </div>
    );
}