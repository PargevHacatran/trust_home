import styles from "../../styles/about.module.css"

export const AboutStat = ({ count, description }) => {
    return (
        <div className={styles.about_stat}>
            <h3 className={styles.about_stat_count}>{ count }</h3>
            <p className={styles.about_stat_description}>{ description }</p>
        </div>
    );
}