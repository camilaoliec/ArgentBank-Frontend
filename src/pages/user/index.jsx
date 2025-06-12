import { useSelector } from "react-redux";
import "./style.scss";
import { useState } from "react";
import EditNameForm from "../../components/EditNameForm";
import Button from "../../components/button";

function User() {
  const userInfos = useSelector((state) => state.user.userInfos);
  const [isEditing, setIsEditing] = useState(false);
  const userName = userInfos?.userName || "";


  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName}
        </h1>
        {isEditing ? (
          <EditNameForm onClose={() => setIsEditing(false)} />
        ) : (
          <>
            <Button type="button" className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </Button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button type="button" className="transaction-button">View transactions</Button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button type="button" className="transaction-button">View transactions</Button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button type="button" className="transaction-button">View transactions</Button>
        </div>
      </section>
    </main>
  );
}

export default User;
