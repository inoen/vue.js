<template>
  <div id="app2">
    <h2>タスク一覧</h2>
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
        <tr v-for="item in tasks" v-bind:key="item.id">
          <th>{{item.id}}</th>
          <td>{{item.name}}</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <item v-for="item in items" :item="item"></item>
    </ul>
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