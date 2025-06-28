import { icons } from "../../utils/developer/icons";
import { SideBarNavigationListItem } from "./SideBarNavigationListItem";
import styles from "../../styles/sidebar.module.css";

export const SideBar = ({ sidebarNavigationList }) => {
    return (
        <div className={styles.sidebar_wrapper}>
            <div className={styles.sidebar_logo}>
                { icons.logo }
            </div>
            <div className={styles.sidebar_navigation_list}>
                {
                    sidebarNavigationList.map((item, index) => (
                        <SideBarNavigationListItem 
                            key={index}
                            title={item.title}
                            tabValue={item.tabValue}
                            activeIcon={item.activeIcon}
                            passiveIcon={item.passiveIcon}
                        />  
                    ))
                }
            </div>
        </div>
    );
}