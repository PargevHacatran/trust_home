import styles from "../../../styles/developer.module.css";

export const TableHeaderColumn = ({ text }) => {
    return (
        <div className={styles.contacts_params_column}>
            <p className="uppercase text-[#6B6E75] font-bold text-[14px]">{ text }</p>
        </div>
    );
}