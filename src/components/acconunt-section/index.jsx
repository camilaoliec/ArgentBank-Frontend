import PropTypes from "prop-types"

const AccountSection = ({ title, amount, description }) => (
    <div className="wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
    </div>
)

AccountSection.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}

export default AccountSection 