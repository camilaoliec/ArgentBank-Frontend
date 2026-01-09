import PropTypes from 'prop-types';
import './style.scss';

function Button ({ children, className = "", ...props }) {
    return (
        <button className={ `custon-button ${className}`} {...props}>
            {children}
        </button>
    )
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    className:PropTypes.string
}

export default Button;