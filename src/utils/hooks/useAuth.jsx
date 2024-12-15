import {useSelector} from "react-redux";
import useLocalstorage from "./useLocalstorage";

export function useAuth() {
    const {email, accessToken, refreshToken, id} = useSelector(state => state.user);

    const [isAuth, setIsAuth] = useLocalstorage({email, accessToken, refreshToken, id}, 'user');

    return { isAuth }
}