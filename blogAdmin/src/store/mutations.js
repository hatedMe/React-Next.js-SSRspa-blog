export const loginIn = (state, data) => {
    localStorage.setItem('token', data);
    state.token = data;
}