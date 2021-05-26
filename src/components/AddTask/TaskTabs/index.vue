<template>
  <div class="taskTabsContainer">
    <button 
      @click="sendCompTask" 
      @mouseenter="completedFilter"
    >
      All / Completed
    </button>
    <button
      v-show="compTask.length !== 0"
      @click="deleteAllCompletedTask"
    >
      ClearAllCompleted
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
    deleteAllCompletedTask() {
      this.compTask.splice(0, this.compTask.length) // 删除全部已完成任务
    }
  },
  computed: {
    completedFilter() {
      let that = this
      return function compFilter() {
        console.log(that.chooseAll)
         // 过滤已经完成的任务
        if(that.chooseAll === false) {
          that.compTask = that.task.filter(taskItem => taskItem.chosen)
        } else {
          that.compTask = that.task
        }
      }
    }
  },
}
</script>
<style lang='less' scoped>
</style>