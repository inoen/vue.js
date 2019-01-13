<template>
  <div id="app2">
    <img src="./assets/logo.png">
    <h2>タスク一覧</h2>
    <div class>
      <p>o</p>
    </div>
    <div class="div">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>COMMENT</th>
            <th>STATUS</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          <item v-for="item in items" :item="item"></item>
        </tbody>
      </table>
    </div>
    <div class>
      <input type="text" v-model="inputTitle">
      <button @click="ADD_TASK(inputTitle)">add</button>
    </div>
  </div>
</template>

<script>
import item from "./item.vue";
import { mapState, mapActions } from "vuex";
import * as types from "./store/mutation-types";
export default {
  components: { item },
  data() {
    return {
      inputTitle: ""
    };
  },
  methods: {
    ...mapActions([types.ADD_TASK])
  },
  computed: {
    ...mapState(["items"])
  }
};
</script>

<style scoped>
#app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
}
.div {
  display: flex;
  justify-content: space-around;
}
table {
  width: 800px;
}
</style>
