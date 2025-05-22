import './style.scss';

function Button ({ children, className = "", ...props }) {
    return (
        <button className={ `custon-button ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button;