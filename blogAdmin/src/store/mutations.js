export const loginIn = (state, data) => {
    localStorage.setItem('token', data);
    state.token = data;
}



export const reviseArticle = (state,bool) => {
    state.isRevise = bool;
}
