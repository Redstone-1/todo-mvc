<template>
  <!-- 任务列表 -->
  <div class="taskList">
    <ul class="taskUl">
      <li 
        class="taskLi" 
        v-for="(item, index, id) of filterdTaskList" 
        :key="id" @click="chosenOrNot(index)">
        <i 
          v-if="filterdTaskList[index].chosen" 
          class="iconfont icon-xuanzhong taskChosen"></i>
        <i 
          v-else-if="!filterdTaskList[index].chosen" 
          class="iconfont icon-weixuanzhong taskChosen"></i>
          {{ item.name }}
        <button class="iconfont icon-cha deleteBtn" @click.stop="deleteTaskItem(index)"></button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'TaskList',
  data () {
    return {
      filterdTaskList: this.$store.state.taskList // 直接使用this.taskList没法给filterdTaskList赋值
    }
  },
  watch: {
    $route(to) {
      if (to.path === '/all') {
        this.filterdTaskList = this.taskList
      } else if (to.path === '/active') {
        this.filterdTaskList = this.taskList.filter(ele => ele.chosen === false)
      } else if (to.path === '/completed') {
        this.filterdTaskList = this.taskList.filter(ele => ele.chosen === true)
      }
    }
  },
  methods: {
    deleteTaskItem (idx) {
      this.taskList.splice(this.taskList.findIndex((item, index) => index === idx), 1) // 点击删除按钮删除任务
    }
  },
  computed: {
    ...mapState(['taskList']),
    // 添加单项任务的选中事件，chosen为true表示选中，为false表示未选中
    chosenOrNot() {
      return function singleTaskChosen(index) {
        return this.taskList[index].chosen = !this.taskList[index].chosen
      }
    },
  },
  updated () {
    let leftTask = this.taskList.filter(ele => ele.chosen === false)
    this.$store.commit('changeLeftTask', leftTask.length)
  }
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
      &:hover {
        cursor: pointer;
        color: #f98404;
      }
    }
  }
}
</style>