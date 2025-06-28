import { content } from "../utils/developer/content";

import styles from "../styles/developer.module.css"

import { SideBar } from "../components/public/SideBar"
import { sideBarNavigationList } from "../utils/developer/sideBarNavigationList";

function Developer () {
    const searchURLParams = new URLSearchParams(document.location.search); 

    return (
        <>
            <div className={styles.developer_wrapper}>
                <SideBar 
                    sidebarNavigationList={sideBarNavigationList}
                />

                <div className={styles.developer_content}>
                    { content[searchURLParams.get("tab")] }
                </div>
            </div>
        </>
    )
}

export default Developer;