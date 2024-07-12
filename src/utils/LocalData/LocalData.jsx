/**
 * gère :
 * le localStorage,
 * le sessionSotrage,
 */
export const setData = (key,value)=>{
    localStorage.setItem(key,value);
}
export const getData = (key)=>{
    localStorage.getItem(key);
}
export const getAllDatas = ()=>{
    return localStorage;
}
export const removeData = (key)=>{
    localStorage.removeItem(key);
}
export const removeDatas= ()=>{
    localStorage.clear();
}
export const getSessionData = (key)=>{
    sessionStorages.getItem(key);
}
