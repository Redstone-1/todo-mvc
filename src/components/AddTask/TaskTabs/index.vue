<template>
  <div class="taskTabsContainer">
    <button 
      @click="sendCompTask" 
      @mouseenter="completedFilter"
    >
      All / Completed
    </button>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Array,
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
  },
  computed: {
    completedFilter() {
      let that = this
      return function compFilter() {
        that.compTask = that.task.filter(taskItem => taskItem.chosen) // 过滤已经完成的任务
      }
    }
  },
}
</script>
<style lang='less' scoped>
</style>