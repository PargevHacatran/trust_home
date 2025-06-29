import { Button } from "./Button"
import styles from "../../styles/topbar.module.css";
import { icons } from "../../utils/public/icons";

export const TopBar = ({ title, btnText, btnOnClick }) => {
    return (
        <div className={styles.topbar_wrapper}>
            <div>
                <h1 className={styles.topbar_title}>{ title }</h1>
            </div>
            <div className={styles.topbar_right_section}>
                <div className={styles.topbar_icon_wrapper}>
                    { icons.notification }
                </div>
                <div>
                    <Button 
                        className={styles.topbar_button}
                        onClick={() =>  btnOnClick()}
                    >
                        { btnText }
                    </Button>
                </div>
            </div>
        </div>
    )
}