import styles from "../../styles/about.module.css"; 

export const AboutAdvanture = ({ icon, title }) => {
    return (
        <div className={styles.about_advanture}>
            <div className={styles.about_advanture_icon_wrapper}>
                { icon }
            </div>
            <div>
                <p className={styles.about__main_advanture_title}>{ title }</p>
            </div>
        </div>
    );
}