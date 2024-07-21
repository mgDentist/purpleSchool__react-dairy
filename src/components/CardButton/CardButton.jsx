import './CardButton.css';

function CardButton({ children, className = '' }) {
	return (
		<button 
			className={`card-button ${className}`}>
			{children}
		</button>
	);
}

export default CardButton;
