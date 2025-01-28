import moment from "moment";

export function logOut(dispatch, removeUser, redirectLoginPage) {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        dispatch(removeUser());
        redirectLoginPage('/login', {replace: true });
    }
}

export const formatDate = (value) => {
    return moment(value).format("YYYY-MM-DD");
  };