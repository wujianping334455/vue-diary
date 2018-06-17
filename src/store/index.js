import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

// 注册vuex组件
Vue.use(Vuex);

// state
const state = {
    login : false,
    topInfos : [],// 头部显示数据集合
    list :[]
}

// store
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});

export default store;