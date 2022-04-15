import { Outlet, Navigate } from "react-router";

const useAuth = () => {
    const token = localStorage.getItem('token') || '';
    if (!token){
        return false
    }
    return true;
};

const ProtectedRoutes = () =>{
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
