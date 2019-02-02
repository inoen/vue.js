<template>
  <div id="app2">
    <img src="./assets/logo.png">
    <router-view/>
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
      <button type="button" v-on:click="save">8</button>
      <button type="button" v-on:click="restore">8</button>
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
    ...mapActions([types.ADD_TASK]),
    save() {
      this.$store.dispatch("save");
    },
    restore() {
      this.$store.dispatch("restore");
    }
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
