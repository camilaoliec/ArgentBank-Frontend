import { useDispatch, useSelector } from "react-redux"
import { editProfile } from "../../redux/userSlice"
import { useState } from "react"
import "./style.scss"
import Button from "../button"

function EditNameForm({ onClose }) {
    const dispatch = useDispatch()
    const userInfos = useSelector((state) => state.user.userInfos)
    const [userName, setUserName] = useState(userInfos.userName || "")
    const [firstName, setFirstName] = useState (userInfos.firstName)
    const [lastName, setLastName] = useState (userInfos.lastName)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editProfile({ userName, firstName, lastName }))
        onClose()
    }

    return (
        <form onSubmit={handleSubmit} className="edit-name-form">
            <div className="input-wrapper-editName">
                <label className="label-editName" htmlFor="userName">User Name:</label>
                <input 
                    id="userName" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="input-wrapper-editName">
                <label className="label-editName" htmlFor="firstName">First Name:</label>
                <input 
                    id="firstName" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="input-wrapper-editName">
                <label className="label-editName" htmlFor="lastName">Last Name:</label>
                <input 
                    id="lastName" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="container-button">
                <Button className="button-edit-form" type="submit" disabled={!userName || !firstName || !lastName}>Save</Button>
                <Button className="button-edit-form" type="button" onClick={onClose}>Cancel</Button>
            </div>
        </form>
    )
}
export default EditNameForm