<template>
  <div class="addTaskContainer">
    <!-- 添加任务栏 -->
    <div class="addTaskArea">
      <!-- 下箭头，全选功能 -->
      <i 
        class="iconfont icon-arrow-down chooseAll" 
        @click.prevent="chooseAllTasks"
        @dblclick.prevent="cancelChooseAll"
        ></i>
      <!-- input输入框，用户任务名 -->
      <input 
        type="text"
        class="taskInput"
        v-model="taskName"
        autofocus
        placeholder="添加您的任务"
      />
      <!-- 添加任务的按钮 -->
      <button class="addTaskBtn" @click="addTask">添加任务</button>
    </div>
    <!-- 任务列表组件 -->
    <router-view />
    <TaskTabs
      v-if="taskList.length"
      :chooseAll="chooseAll"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TaskTabs from './TaskTabs'

export default {
  components: {
    // TaskList,
    TaskTabs,
  },
  data() {
    return {
      // input输入框的值
      taskName: '',
      // 是否全选
      chooseAll: false,
    }
  },
  methods: {
    // 添加任务按钮的事件
    addTask() {
      let id = 0
      this.$store.commit('addTask', {
        id: id++,
        name: this.taskName,
        chosen: false
      })
      this.taskName = ''
    },
    // clearAllTask() {
    //   this.list.splice(0, this.list.length)
    // }
  },
  computed: {
    ...mapState(['taskList']),
    chooseAllTasks () {
      return function chooseAll() {
        this.taskList.forEach(ele => {
            ele.chosen = true
        });
      }
    },
    cancelChooseAll () {
       return function  cancelChoose() {
        this.taskList.forEach(ele => {
          ele.chosen = false
        });
      }
    }
  },
}
</script>
<style lang='scss'>
.addTaskContainer {
width: 500px;
height: 100%;
margin: 10px auto;
background-color: #fff8d9;
box-shadow: 0 0 2px 2px #a0937d;
.addTaskArea {
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  .chooseAll {
    &:hover{
      cursor: pointer;
      color: #ff6701;
    }
    margin: 10px 20px 0 10px;
  }
  .taskInput {
    width: 70%;
    height: 50px;
    border: 0px;
    background-color: #f0e3ca;
    font-size: 25px;
    text-indent: 10px;
  }
  .addTaskBtn {
    width: 50px;
    height: 50px;
    background-color: #de8971;
    border: 0px;
    border-radius: 4px;
    margin-left: 25px;
    margin-bottom: 10px;
    position: absolute;
    top: 11px;
    right: 30px;
      &:hover {
        cursor: pointer;
        background-color: #a0937d;
        color: #fff;
      }
    }
  }
}

</style>