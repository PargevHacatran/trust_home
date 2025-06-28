export const Button = ({ className, children, onClick }) => {
    return (
        <button 
            className={className}
            onClick={(e) => onClick(e)}
        >
            { children }
        </button>
    )
}
