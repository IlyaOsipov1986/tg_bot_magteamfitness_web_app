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

//Запрос для установки гайда для выбранного пользователя
export const putSetGuideSelectedUser = async (id, dataUser) => {
  return await apiService
    .put(`/users/${id}`, JSON.stringify(dataUser))
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
    .delete(`/guides/${id}`)
    .then((resp) => resp.data);
};

//Запрос на обновление гайда
export const updateGuide = async (id, guide) => {
  return await apiService
    .put(`/guides/${id}`, JSON.stringify(guide))
    .then((resp) => resp.data);
};