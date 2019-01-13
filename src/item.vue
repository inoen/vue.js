<template>
  <tr>
    <th>{{item.id}}</th>
    <td v-bind:class="{ 'is-do':item.is_do }" @click="DONE_TASK(item)">{{item.title}}</td>
    <td>{{item.status}}</td>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
import * as types from "./store/mutation-types";

export default {
  props: ["item"],
  methods: {
    ...mapActions([types.DONE_TASK])
  }
};
</script>
<style scoped>
td {
  cursor: pointer;
}
td.is-do {
  text-decoration: line-through;
}
</style>