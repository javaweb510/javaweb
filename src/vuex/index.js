import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

//创建一个对象来保存应用启动时的初始状态
const state = {
    session: {}            // 登录用户所管理的行业
}

const actions = {

}
// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    setSession: (state, val) =>  state.session = val,
}

const getters = {
    getSession: () => state.session
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
