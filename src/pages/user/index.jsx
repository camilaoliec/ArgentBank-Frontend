import './style.scss'
import AccountSection from "../../components/acconunt-section"
import Button from '../../components/button'

function User() {
    return (
        <main className="user">
            <header>
                <h1>Welcome back</h1>
                <Button className='edit-button'>Edit Name</Button>
            </header>
            <div className="user__content">
                <section className="account">
                    <AccountSection
                        title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        description="Available Balance"
                    />
                    <Button className='transaction-button'>View transactions</Button>
                </section>
                <section className="account">
                    <AccountSection
                        title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        description="Available Balance"
                    />
                    <Button className='transaction-button'>View transactions</Button>
                </section><section className="account">
                    <AccountSection
                        title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        description="Current Balance"
                    />
                    <Button className='transaction-button'>View transactions</Button>
                </section>
            </div>
        </main>
    )
}

export default User