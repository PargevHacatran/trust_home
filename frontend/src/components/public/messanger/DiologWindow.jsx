import { DiologWindowTopBar } from "./DiologWindowTopBar";
import { Message } from "./Message";
import { SendMessageHolder } from "./SendMessageHolder";

import styles from "../../../styles/messanger.module.css";

const messages = [
    {
        role: "developer", 
        name: "Samuel Reza",
        userId: 123,
        time: "12:50",
        message: "Dude i cont beat lunastra alone. \n\n Please somebody help me!"
    },
    {
        role: "realtor", 
        name: "User",
        userId: 456,
        time: "13:45",
        message: "You should bring lot of health potion, and dont forget the fire resistents"
    },
]

export const DiologWindow = ({ companionName }) => {
        const companionData = messages.filter((item) => item.name === companionName)[0];
    
    return (
        <div className={styles.diolog_window_wrapper}>
            <DiologWindowTopBar 
                companionName={companionName}
                companionRole={companionData.role.split("")[0].toUpperCase() + companionData.role.slice(1)}
            />

            <div className={styles.diolog_messages_list}>
                {
                    messages.map((item, index) => (
                        <Message 
                            key={index}
                            role={item.role}
                            name={item.name}
                            time={item.time}
                            message={item.message}
                        />
                    ))
                }
            </div>

            <SendMessageHolder />
        </div>
    );
}