import { Navigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useAuth} from "../../hooks/useAuth.js";
import {removeUser} from "../../store/slices/userSlice.js";

const HomePage = () => {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();

    console.log(isAuth)

    return isAuth ? (
        <div>
            <h1>Добро пожаловать</h1>
            <button onClick={() => dispatch(removeUser())}>Выход</button>
        </div>
    ) : (
        <Navigate to="/login" />
    )
}
export default HomePage;