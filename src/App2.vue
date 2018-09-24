<template>
  <div id="cha">
      <ul>
          <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    var vm = this
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
      vm.users = response.data
      })
  },
  name: 'App2'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
