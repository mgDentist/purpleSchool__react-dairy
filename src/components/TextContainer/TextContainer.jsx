import './TextContainer.css'; 

function TextContainer({data: {title, date, subtitle}}) {
	const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return (
		<div className="text-container">
			<h2 className="text-container__title">{title}</h2>
			<p className="text-container__date">{formattedDate}</p>
			<p className="text-container__subtitle">{subtitle}</p>
		</div>
	);
}

export default TextContainer;
