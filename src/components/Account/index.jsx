import PropTypes from "prop-types";
import Button from "../button";

const Account =({ title, amount, description }) => (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
        <Button type="button" className="transaction-button">
          View transactions
        </Button>
      </div>
    </section>
)

Account.PropTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
Button.prototype = {
    className:PropTypes.string.isRequired
    
}

export default Account;