import './style.scss'
import AccountSection from "../../components/acconunt-section"

function User() {
    return (
        <main className="user">
            <header>
                <h1>Welcome back</h1>
                <button className='edit-button'>Edit Name</button>
            </header>
            <div className="user__content">
                <section className="account">
                    <AccountSection
                        title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        description="Available Balance"
                    />
                    <button className='transaction-button'>View transactions</button>
                </section>
                <section className="account">
                    <AccountSection
                        title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        description="Available Balance"
                    />
                    <button className='transaction-button'>View transactions</button>
                </section><section className="account">
                    <AccountSection
                        title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        description="Current Balance"
                    />
                    <button className='transaction-button'>View transactions</button>
                </section>
            </div>
        </main>
    )
}

export default User