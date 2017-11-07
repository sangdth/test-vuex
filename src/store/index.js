import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 10
};

// This thing acts like "computed" inside components, but can access global.
const getters = {
  doubleCount: function(state, getters) {
    return state.count * 2;
  }
}


// Mutation should be pure function, can not async / await 
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

// this actions can use async await
const actions = {
  addmore(context) {
    context.commit('increment');
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
