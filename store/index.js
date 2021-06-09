import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [],
    tabsType: ['all', 'active', 'completed'],
    leftTask: 0
  },
  mutations: {
    addTask (state, task) {
      state.taskList.push(task)
    },
    deleteCompTask (state) {
      let compTask = state.taskList.filter(ele => ele.chosen === true)
      state.taskList.forEach((ele, index) => {
        if (ele.chosen === true) {
          state.taskList.splice(index, compTask.length)
        }
      })
    },
    changeLeftTask (state, num) {
      state.leftTask = num
    }
  }
})