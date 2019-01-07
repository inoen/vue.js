<template>
  <div :style="errorMessageStyle">
    <p>{{items[0].name}}: {{items[0].price}} x {{ items[0].quanity }}</p>
    <p>小計:{{ totalPrice|numberWithDelimiter}}</p>
    <p>合計:{{ totalPriceWithTax|numberWithDelimiter}}</p>
    <p v-show="!canBuy">{{ 1000|numberWithDelimiter }}円以上からご購入いただけます</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      items: [
        {
          name: "pen",
          price: 300,
          quanity: 3
        }
      ]
    };
  },
  filters: {
    numberWithDelimiter: function(value) {
      if (!value) {
        return "0";
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
  },
  computed: {
    totalPrice: function() {
      return this.items.reduce(function(sum, item) {
        return sum + item.price * item.quanity;
      }, 0);
    },
    totalPriceWithTax: function() {
      return Math.floor(this.totalPrice * 1.08);
    },
    canBuy: function() {
      return this.totalPrice >= 1000;
    },

    errorMessageStyle: function() {
      return {
        border: this.canBuy ? "" : "1px solid red",
        color: this.canBuy ? "" : "red"
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

