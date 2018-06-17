import {getStore} from './utils';
import {TOP_INFOS} from './mutatian-type';
export const userLogin = (state) =>{
    console.log(state);
}
// 头部信息
export const topInfos = (state) =>{
    return state.topInfos; 
}
// 列表部门信息
export const list = (state)=>{
    return state.list.length==0 ? [] : state.list;
}
// 列表部门信息
export const users = (state)=>{
    return state.users.length==0 ? [] : state.users;
}