<template>
  <!-- 任务列表 -->
  <div class="taskList">
    <ul class="taskUl">
      <li 
        class="taskLi" 
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
      deleteTaskItem(idx) {
        this.task.splice(this.task.findIndex((item, index) => index === idx), 1) // 点击删除按钮删除任务
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
.taskList {
  width: 100%;
  height: 100%;
  .taskUl {
    padding: 0 0 15px 20px;
    .taskLi {
      padding: 12px 0 12px 0;
      position: relative;
    }
    .deleteBtn {
      width: 30px;
      height: 30px;
      border: 0px;
      background-color: #536162;
      color: #fff;
      border-radius: 2px;
      position: absolute;
      right: 30px;
    }
  }
}
</style>