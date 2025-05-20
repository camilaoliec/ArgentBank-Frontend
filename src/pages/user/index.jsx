import { useSelector } from "react-redux";
import "./style.scss";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import EditNameForm from "../../components/EditNameForm";

function User() {
  const token = useSelector((state) => state.user.token);
  const userInfos = useSelector((state) => state.user.userInfos);
  const loading = useSelector((state) => state.user.loading);


  const [isEditing, setIsEditing] = useState(false)

  const firstName = userInfos?.firstName || "";
  const lastName = userInfos?.lastName || "";

  if (loading) return null;
  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}
        </h1>
            {isEditing ? (
              <EditNameForm onClose={() => setIsEditing(false)} />
            ) : (
              <>
                <button onClick={() => setIsEditing(true)} className="edit-button">Edit Name</button>
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
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default User;
