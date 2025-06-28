export const BlockTitle = ({ title, description, theme }) => {
    const blockTitleStyles = {
        title: {
            color: theme === "light" ? "#111827" : "#FFFFFF" ,
            fontWeight: "bold",
            lineHeight: "30px",
            fontSize: "30px",
            textAlign: "center"
        },
        description: {
            color: theme === "light" ? "#4B5563" : "#DBEAFE",
            fontSize: "18px",
            lineHeight: "28px",
            textAlign: "center",
            marginTop: "17px"
        }
    }

    return (
        <div>
            <h2 style={blockTitleStyles.title}>{ title }</h2>
            <p style={blockTitleStyles.description}>{ description }</p>
        </div>
    );
}