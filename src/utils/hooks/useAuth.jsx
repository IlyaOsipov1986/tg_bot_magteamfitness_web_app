import {useSelector} from "react-redux";
import {useState} from "react";
import useLocalstorage from "./useLocalstorage.jsx";

export function useAuth() {
    const {email, accessToken, refreshToken, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        accessToken,
        refreshToken,
        id
    }
}