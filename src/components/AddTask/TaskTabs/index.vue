<template>
  <div class="taskTabsContainer">
    <div
      v-for="tab in tabsType"
      :key="tab.value"
      class="tabs"
    >
      <router-link :to=" '/' + tab " class="tabs-link">{{ tab.toUpperCase().slice(0, 1) + tab.slice(1) }}</router-link>
    </div>
    <button
      class="AllCompletedTask"
      @click="clearCompTask"
    >
      ClearCompTask
    </button>
    <span class="leftTask">{{leftTask + `-${leftTask === 1? 'item':'items'}-left`}}</span>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    chooseAll: {
      type: Boolean,
      required: true,
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clearCompTask () {
      this.$store.commit('deleteCompTask')
    }
  },
  computed: {
    ...mapState(['tabsType', 'leftTask'])
  }
}
</script>
<style lang='scss' scoped>
.taskTabsContainer {
  width: 100%;
  height: 30px;
  .tabs {
    display: inline-block;
    height: 23px;
    border: 0px;
    background-color: #536162;
    color: #fff;
    border-radius: 2px;
    margin-left: 20px;
    box-sizing: border-box;
    &:hover {
      cursor: pointer;
      color: #f98404;
    }
    .tabs-link {
      color: #fff;
      font-size: 12px;
      text-decoration: none;
      padding: 4px 4px 0 4px;
      &:hover {
        cursor: pointer;
        color: #f98404;
      }
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
  .leftTask {
    color: crimson;
    margin-left: 20px;
    font-size: 14px;
  }
}
</style>