<template>
  <div class="addTaskContainer">
    <!-- 添加任务栏 -->
    <div class="addTaskArea">
      <!-- 下箭头，全选功能 -->
      <i 
        class="iconfont icon-arrow-down" 
        @click.stop="chooseAllTasks"></i>
      <!-- input输入框，用户任务名 -->
      <input 
        :value="value" 
        ref="addTaskInput"/>
      <!-- 添加任务的按钮 -->
      <button @click="addTask">添加任务</button>
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
      :task="list" 
      @receiveCompTask="receiveCompTask"
    />
  </div>
</template>
<script>
import TaskList from './TaskList'
import TaskTabs from './TaskTabs'

export default {
  components: {
    TaskList,
    TaskTabs
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
        this.list.unshift(newTask)
      }
    },
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
</style>