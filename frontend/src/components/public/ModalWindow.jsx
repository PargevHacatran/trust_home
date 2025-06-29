import { Input } from './Input';

import styles from "../../styles/messanger.module.css";
import modalWinStyles from "../../styles/modal_window.module.css";
import { Button } from './Button';

export const ModalWindow=  ({ inputs, title, onClick, closeWindowState }) => {

  const closeWindow = (e) => {
    if (e.target.className.contain(modalWinStyles.modal_win)) {
        closeWindowState()
    }
  }  

  return (
    <div className={modalWinStyles.modal_win} onClick={() => closeWindow()}>
        <div className={modalWinStyles.modal_win_wrapper}>
            <div>
                <p className={modalWinStyles.title}>{ title }</p>
            </div>

            <div className={modalWinStyles.modal_win_inputs_wrapper}>
                {
                    inputs.map((item, index) => (
                        <Input
                            key={index}
                            name="message"
                            areaClassName={modalWinStyles.modal_win_input_area}
                            className={styles.send_message_input}
                            placeholder={item.placeholder}
                            onChange={(e) => item.setState(e)}
                        />
                    ))
                }

                <Button
                    onClick={() => onClick()}
                >
                    Создать
                </Button>
            </div>
        </div>
    </div>
  );
}