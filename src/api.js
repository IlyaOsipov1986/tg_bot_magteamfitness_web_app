import axios from "axios";
import { config } from "./config";

export const apiService = axios.create({
    baseURL: config.api_url,
    headers: {
      "Content-type": "application/json",
    },
});

//Запрос для получения списка пользователей  
export const getUsers = async () => {
    return await apiService
      .get('/users')
      .then((resp) => resp.data);
};

//Запрос для получения списка гайдов 
export const getGuides = async () => {
    return await apiService
      .get('/guides')
      .then((resp) => resp.data);
};