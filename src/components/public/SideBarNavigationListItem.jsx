import { useEffect, useState } from "react";

import styles from "../../styles/sidebar.module.css";

export const SideBarNavigationListItem = ({ title, tabValue, activeIcon, passiveIcon }) => {
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        const searchURLParams = new URLSearchParams(document.location.search); 
        const urlTab = searchURLParams.get("tab")

        setActiveTab(urlTab)
    }, [])

    return (
        <div  
            onClick={() => self.location.href.replace(activeTab, tabValue) }
            className={styles.sidebar_navigation_list_item}
            style={{
                borderLeft: activeTab === tabValue ? "4px solid #1D4ED8" : 0,
            }}
        >
            <div className={styles.sidebar_navigation_list_item_icon}>
                { activeTab === tabValue ? activeIcon : passiveIcon }
            </div>

            <div>
                <div 
                    style={{
                        fontWeight: activeTab === tabValue ? "bold" : "400",
                        color: activeTab === tabValue ? "#1D4ED8 !important" : "#6B6E75 !important"
                    }}
                >
                    <a
                        href={`?tab=${tabValue}`}
                        className={styles.sidebar_navigation_list_item_title}
                    >
                        { title }
                    </a>
                </div>
            </div>
        </div>
    );
}