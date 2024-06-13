import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import useLocalstorage from "./useLocalstorage.jsx";

export function useAuth() {
    const {email, accessToken, refreshToken, id} = useSelector(state => state.user);

    const [isAuth, setIsAuth] = useLocalstorage({email, accessToken, refreshToken, id}, 'user');

    return { isAuth }
}