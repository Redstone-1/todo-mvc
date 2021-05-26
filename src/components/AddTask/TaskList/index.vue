<template>
  <div class="listContainer">
    <!-- 任务列表 -->
    <div class="taskList">
      <ul class="taskUl">
        <li 
          class="taskList" 
          v-for="(item, index, id) of task" 
          :key="id" @click="chosenOrNot(index)">
          <i 
            v-if="task[index].chosen || chooseAll" 
            class="iconfont icon-xuanzhong taskChosen"></i>
          <i 
            v-else-if="!task[index].chosen || chooseAll" 
            class="iconfont icon-weixuanzhong taskChosen"></i>
            {{ item.taskName }}
          <button class="iconfont icon-cha deleteBtn" @click.stop="deleteTaskItem(index)"></button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TaskList',
    props: {
      task: Array,
      chooseAll: Boolean
    },
    data () {
      return {
      }
    },
    methods: {
      deleteTaskItem(index) {
        this.task.splice(this.task.findIndex(item => item.index === index), 1)
      }
    },
    computed: {
      // 添加单项任务的选中事件，chosen为true表示选中，为false表示未选中
      chosenOrNot() {
        return function singleTaskChosen(index) {
          return this.task[index].chosen = !this.task[index].chosen
        }
      },
    },
  }
</script>
<style lang='scss' scoped>

.deleteBtn {
  z-index: 1;
}
</style>