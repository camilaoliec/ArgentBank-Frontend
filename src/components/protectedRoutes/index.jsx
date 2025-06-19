import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
    const token = useSelector((state) => state.user.token);
    if (!token) {
        return <Navigate to="/sign-in" replace />;
    }
    return children ?? null
}