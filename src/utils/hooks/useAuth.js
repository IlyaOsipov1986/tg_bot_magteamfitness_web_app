import { useSelector } from "react-redux";
import { useLocalstorage } from "../../utils/hooks/useLocalstorage";

export function useAuth() {
    const { login, accessToken, refreshToken, id, isAdmin } = useSelector(state => state.user);
    
    const [isAuth, setIsAuth] = useLocalstorage({login: login, accessToken: accessToken, refreshToken: refreshToken, id: id, isAdmin: isAdmin}, 'user');

    return { isAuth }
}