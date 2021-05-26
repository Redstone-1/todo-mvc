<template>
  <div class="addTaskContainer">
    <!-- 添加任务栏 -->
    <div class="addTaskArea">
      <!-- 下箭头，全选功能 -->
      <i 
        class="iconfont icon-arrow-down chooseAll" 
        @click.stop="chooseAllTasks"></i>
      <!-- input输入框，用户任务名 -->
      <input 
        class="taskInput"
        :value="value" 
        ref="addTaskInput"
        autofocus
        placeholder="添加您的任务"
      />
      <!-- 添加任务的按钮 -->
      <button class="addTaskBtn" @click="addTask">添加任务</button>
    </div>
    <!-- 任务列表组件 -->
    <TaskList
      v-show="allTaskShow" 
      :task="list" 
      :chooseAll="chooseAll">
    </TaskList>
    <TaskList
      v-show="!allTaskShow" 
      :task="compList" 
      :chooseAll="chooseAll">
    </TaskList>
    <TaskTabs
      :chooseAll="chooseAll"
      :task="list" 
      @receiveCompTask="receiveCompTask"
      @clearAllTask="clearAllTask"
    />
  </div>
</template>
<script>
import TaskList from './TaskList'
import TaskTabs from './TaskTabs'

export default {
  components: {
    TaskList,
    TaskTabs,
  },
  data() {
    return {
      // input输入框的值
      value: '',
      // 任务列表
      list: [],
      compList: [],
      // 是否全选
      chooseAll: false,
      allTaskShow: true
    }
  },
  methods: {
    // 添加任务按钮的事件
    addTask() {
      // 使用ref获得input输入框的值
      let inputValue = this.$refs.addTaskInput.value
      let d = new Date()
      let newTask = { id: 0, taskName: '', chosen: false }
      // 判断输入框是否有值，有值则添加任务
      if(inputValue) {
        newTask.id = d.getSeconds() + d.getMilliseconds()
        newTask.taskName = inputValue
        this.list.push(newTask)
      }
    },
    clearAllTask() {
      this.list.splice(0, this.list.length)
    }
  },
  computed: {
    chooseAllTasks() {
      return function chooseAll() {
        this.chooseAll = !this.chooseAll
      }
    },
    receiveCompTask() {
      let that = this
      return function rcvCompTask(e) {
        that.compList = e
        that.allTaskShow = !that.allTaskShow
      }
    },
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