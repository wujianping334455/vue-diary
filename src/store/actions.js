export const getDeparts = ({commit}) =>{
    commit('getDeparts');
}
// list页面点击部门
export const listDepart =({commit},param) =>{
    commit('listDepart');
}
// 头部点击
export const topClick = ({commit},param)=>{
    console.log(param);
}