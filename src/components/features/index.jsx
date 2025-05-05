import PropTypes from "prop-types"
import './style.scss'

const Features = ({ icon, alt = "", title, text }) => (
    <div className="feature-item">
        <img src={icon} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{text}</p>
    </div>
)

Features.PropTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Features

