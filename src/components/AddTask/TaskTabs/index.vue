<template>
  <div class="taskTabsContainer">
    <button 
      class="completedTask"
      @click="sendCompTask" 
      @mouseenter="completedFilter"
    >
      All / Completed
    </button>
    <button
      class="AllCompletedTask"
      @click="deleteAllTask"
    >
      ClearAllTask
    </button>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Array,
      required: true,
    },
    chooseAll: {
      type: Boolean,
      required: true,
    }
  },
  data () {
    return {
      compTask: Array // 已经完成的任务
    }
  },
  methods: {
    sendCompTask() {
      this.$emit('receiveCompTask', this.compTask) // emit已经完成的任务
    },
    deleteAllTask() {
      this.$emit('clearAllTask') // 删除全部任务
    }
  },
  computed: {
    // 过滤已经完成的任务
    completedFilter() {
      let that = this
      return function compFilter() {
        // 如果没有点击全选按钮，过滤chosen为true的任务项
        if(that.chooseAll === false) {
          that.compTask = that.task.filter(taskItem => taskItem.chosen)
        } else {
          // 如果点击了全选按钮，将全部task赋给compTask
          that.compTask = that.task
        }
      }
    }
  },
}
</script>
<style lang='scss' scoped>
.taskTabsContainer {
  width: 100%;
  height: 30px;
  .completedTask {
    width: 110px;
    height: 24px;
    border: 0px;
    background-color: #536162;
    color: #fff;
    border-radius: 2px;
    margin-left: 20px;
    &:hover {
      cursor: pointer;
      color: #f98404;
    }
  }
  .AllCompletedTask {
    width: 130px;
    height: 24px;
    border: 0px;
    background-color: #536162;
    color: #fff;
    border-radius: 2px;
    margin-left: 20px;
    &:hover {
      cursor: pointer;
      color: #f98404;
    }
  }
}
</style>