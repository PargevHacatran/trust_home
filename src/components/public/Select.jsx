export const Select = ({ selectClassName, optionClassName, optionsList, onChangeOptions }) => {
    return (
        <div className="relative">
            <select 
                className={selectClassName}
                onChange={(e) => onChangeOptions(e)}
            >
                {
                    optionsList.map((item, index) => (
                        <option
                            key={index}
                            className={optionClassName}
                            value={item.value}
                        >
                            { item.text }
                        </option>
                ))}
            </select>
        </div>
    );
}