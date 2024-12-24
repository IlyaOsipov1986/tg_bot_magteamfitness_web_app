export function logOut(dispatch, removeUser, redirectLoginPage) {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        dispatch(removeUser());
        redirectLoginPage('/login', {replace: true });
    }
}