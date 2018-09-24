<template>
<div>
    <form v-on:submit.prevent="sendTodo">
        <input v-model="todo">
        <input type="submit" val="追加">
    </form>
    <ul v-for ="item in list" :key="item.id">
        <li v-on:click="doneTodo(item)">
          <span>
            status: {{item.status}}
          </span>
          <s v-if="item.status === 'done'">
            {{item.text}}
          </s>
          <span v-else>
            {{item.text}}
          </span>
        </li>
    </ul>
    {{todo}}
</div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      todo: '',
      list: ['']
    }
  },
  methods: {
    sendTodo: function () {
      this.list.push({
        text: this.todo,
        status: 'todo'
      })
      this.todo = ''
    },
    doneTodo: function (item) {
      if (item.status == 'done') {
        item.status = 'todo'}
      else {
        item.status = 'done'
      }
    }
  }
}
</script>
