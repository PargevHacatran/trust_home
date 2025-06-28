const statBlockTitleStyles = {
    fontSize: "24px",
    color: "#1F2937",
    fontWeight: "bold"
}

export const StatBlockTitle = ({ title }) => {
    return (
        <div>
            <h3 style={statBlockTitleStyles}>{ title }</h3>
        </div>
    );
}