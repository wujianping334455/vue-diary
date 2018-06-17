// 设置store
export const setStore = (key,value)=>{
    // 判断是不是字符串
    if(typeof value !== 'string'){
        value = JSON.stringify(value);
    }
    // 存入localstorage
    window.localStorage.setItem(key,value);
}
// 获取store
export const getStore = key=>{
    // 判断key是否为真
    if(!key){ return;}
    // 存入localstorage
    let value  = window.localStorage.getItem(key);
    return JSON.parse(value);
}