export const Input = ({ name, iconPosition, inputIcon, iconClassName, areaClassName, className, placeholder, value, onChange }) => {
    return (
        <label className={className}>
            {
                iconPosition === "left" && (
                    <div className={iconClassName}>
                        {inputIcon}
                    </div>
            )}

            <input
                className={areaClassName} 
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                value={value}
            />

            {
                iconPosition === "right" && (
                    <div className={iconClassName}>
                        {inputIcon}
                    </div>
            )}
        </label>
    );
};