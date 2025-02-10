import axios from "axios";
import { config } from "./config";
import { data } from "autoprefixer";

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

//Запрос на добавление гайда
export const addNewGuide = async (guide) => {
  return await apiService
      .post('/guides', JSON.stringify(guide))
      .then((resp) => resp.data);
};

//Запрос на удаление гайда
export const deleteGuide = async (id) => {
  return await apiService
      .delete(`/guides/:${id}`)
      .then((resp) => resp.data);
};

//Запрос на изменение гайда
export const updateGuide = async (id) => {
  return await apiService
      .put(`/guides/:${id}`)
      .then((resp) => resp.data);
};