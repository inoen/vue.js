<template>
  <div id="cha">
    <div class="checkers"  v-for="a in as" :key="a.id">
    <h2>{{ a.snippet.title }}</h2>
          <img v-bind:src="a.snippet.thumbnails.default.url"  alt="">
      <ul>
          <li v-for="user in users" :key="user.id">登録者数：{{ user.statistics.subscriberCount }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [],
      as: []
    }
  },
  /* created () {
    var vm = this
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
    vm.users = response.data
      })
  }, */
  created () {
    var vm = this
    axios.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        part: 'statistics',
        /*        playlistId:'PLO8eVsQ57a-rkgfgjim2K8ju9tOF_nCp3', */
        id: 'UCWL0-fy1-MDgODCALo-gYbw',
        key: 'AIzaSyBvTFPmHkcapT8Spq27zyrGfYSnN9YmPjM'
      }
    })
      .then(function (response) {
        vm.users = response.data.items
        console.log(vm.users)
      })
    var vm1 = this
    axios.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        part: 'snippet',
        /*        playlistId:'PLO8eVsQ57a-rkgfgjim2K8ju9tOF_nCp3', */
        id: 'UCWL0-fy1-MDgODCALo-gYbw',
        key: 'AIzaSyBvTFPmHkcapT8Spq27zyrGfYSnN9YmPjM'
      }
    })
      .then(function (response) {
        vm1.as = response.data.items
        console.log(vm1.as)
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
body {

}
.checkers {
  width: 350px;
  margin-right: auto;
  margin-left: auto;
}
</style>
