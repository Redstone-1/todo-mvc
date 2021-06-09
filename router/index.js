import Vue from 'vue'
import VueRouter from 'vue-router'
import AddTask from '../src/components/AddTask'
import TaskList from '../src/components/AddTask/TaskList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/all',
    name: 'AddTask',
    component: AddTask,
    children: [
      {
        path: '/:type',
        name: 'TaskList',
        component: TaskList
      }
    ]
  }
]

const router = new VueRouter({ mode:'history', routes })

export default router