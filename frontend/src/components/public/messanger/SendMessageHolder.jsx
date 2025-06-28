import { Button } from "../Button";
import { useState } from "react";
import { icons } from "../../../utils/developer/icons";
import { Input } from "../Input";

import styles from "../../../styles/messanger.module.css";

export const SendMessageHolder = () => {
    const [message, setMessage] = useState("");
    
    return (
        <div className={styles.send_message_wrapper}>
            <Input
                name="message"
                areaClassName={styles.send_message_input_area}
                className={styles.send_message_input}
                placeholder="Сообщение..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <Button
                className={styles.send_message_button}
            >
                <div className={styles.send_message_input_icon_wrapper}>
                    { icons.sendMessage }
                </div>
            </Button>
         </div>
    );
}