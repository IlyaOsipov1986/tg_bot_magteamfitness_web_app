import { useSelector } from "react-redux";
import { useLocalstorage } from "../../utils/hooks/useLocalstorage";

export function useAuth() {
    // const { login, accessToken, refreshToken, id, isAdmin } = useSelector(state => state.user);
    
    const [isAuth, setIsAuth] = useLocalstorage({login: '', accessToken: '', refreshToken: '', id: null, isAdmin: false}, 'user');

    return { isAuth, setIsAuth }
}