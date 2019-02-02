// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App2 from './App2'
import store from './store/index.js'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false



// Initialize Firebase
const config = {
  apiKey: "AIzaSyCvxuJN2hVyVqsFtVrniihI-YOoR-fKnMg",
  authDomain: "meno-eca3a.firebaseapp.com",
  databaseURL: "https://meno-eca3a.firebaseio.com",
  projectId: "meno-eca3a",
  storageBucket: "meno-eca3a.appspot.com",
  messagingSenderId: "431840097707"
};
firebase.initializeApp(config);/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app2',
  components: { App2 },
  template: '<App2/>',
  render: h => h(App2)
})
