function TextContainer({ title, subtitle }) {
    return (
        <div className="text-container">
            <h2 className="text-container__title">{title}</h2>
            <p className="text-container__subtitle">{subtitle}</p>
        </div>
    );
}

export default TextContainer;