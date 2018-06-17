import {TOP_INFOS} from './mutatian-type';
import {setStore,getStore} from './utils';
// 头部数据变化 -- topInfo - depart
export const topClick = (state,param) =>{
    // let topInfos = getStore(TOP_INFOS) || [];
    let index = state.topInfos.indexOf(param);
    if(index < 0){// 没有则加入
        state.topInfos.push(param);
    }else{// 有则删除后面
        state.topInfos.splice(index+1,state.topInfos.length-index);
    }
    // 有子部门
    if(param.departmentList){
        state.list = param.departmentList;
    }else{
        // ...
        state.list =[];
    }
    
    // 存入数据
    // setStore(TOP_INFOS,topInfos);
}

// 部门用户数据
export const listUser = (state,param) =>{
    let {id,name,parentid,position} = param;
    state.topInfos.push({id,name,parentid,position});
    state.list = [];
    // 存入数据
    setStore(TOP_INFOS,state.topInfos);    
}
