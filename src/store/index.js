import Vue from 'vue' // 引入vue
import Vuex from 'vuex' // 引入vuex

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount (state) {
      return state.count + 1
    }
  },
  mutations: {
    add (state) {
      state.count = state.count + 1
    },
    reduce (state, n) {
      state.count = state.count - n
    }
  },
  actions: { // 注册actions类似于vue里的methods
    addFun (context) {
      context.commit('add')
    },
    reduceFun (context, n) {
      context.commit('reduce', n)
    }
  }
})
// Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义vuex的Getter来获取，Getters 可以用于监听、state中的值的变化，返回计算后的结果
export default store
