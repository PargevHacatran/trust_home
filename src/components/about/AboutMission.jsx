import styles from "../../styles/about.module.css";

export const AboutMission = ({ icon, title, description }) => {
    return (
        <div className={styles.about_mission}>
            <div className={styles.about_mission_icon_wrapper}>
                { icon }
            </div>
            <div className={styles.about_mission_info_wrapper}>
                <h3 className={styles.about_mission_title}>{ title }</h3>
                <p className={styles.about_mission_description}>{ description }</p>
            </div>
        </div>
    )
}