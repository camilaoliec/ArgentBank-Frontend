import PropTypes from "prop-types"
import './style.scss'

const Features = ({ image, alt = "", title, text }) => (
            <div className="features__item">
                <img src={image} alt={alt} />
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
    )

Features.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default Features
