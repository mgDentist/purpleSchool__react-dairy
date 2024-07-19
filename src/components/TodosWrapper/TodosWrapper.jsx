import './TodosWrapper.css';

function TodosWrapper({children}) {
	return (
		<div className="todos-wrapper">{children}</div>
	);
}

export default TodosWrapper;