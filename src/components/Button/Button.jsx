import PropTypes from 'prop-types';
import './Button.css';

function Button({ children }) {
    return (
        <button className="button">{children}</button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired
};

export default Button;
