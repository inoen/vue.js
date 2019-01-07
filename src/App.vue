<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Todo />
    <HelloWorld />
    <div v-on:click="countup">
      countup
    </div>
    {{count}}

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Todo from "./components/Todo";

export default {
  data() {
    return {
      omikujiResult: ["大吉", "中吉", "小吉", "凶"],
      count: 0
    };
  },
  methods: {
    omikuji: function() {
      const num = Math.floor(Math.random() * this.omikujiResult.length);
      this.result = this.omikujiResult[num];
    },
    countup: function() {
      this.count += 1;
    }
  },
  name: "App",
  components: {
    HelloWorld,
    Todo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 300px;
}
</style>
