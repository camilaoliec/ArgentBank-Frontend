import { useSelector } from "react-redux";
import { useState } from "react";
import EditNameForm from "../../components/EditNameForm";
import Button from "../../components/button";
import Account from "../../components/Account";
import "./style.scss";

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
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      < Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      < Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default User;
