import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import './assets/styles/main.css'
import './assets/styles/pretty-checkbox.min.css'
import PrettyCheckbox from 'pretty-checkbox-vue'; 
import store from './store/store'


import Multiselect from 'vue-multiselect'
// register globally
Vue.component('multiselect', Multiselect)

Vue.use(firestorePlugin)
Vue.use(PrettyCheckbox);

Vue.config.productionTip = false

let app = '';

Vue.config.devtools = true

// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyC_SWDTQmXhwQuBXIAzYkXd2Z7SBqFwrPY",
  authDomain: "firefly-stage-4231a.firebaseapp.com",
  databaseURL: "https://firefly-stage-4231a.firebaseio.com",
  projectId: "firefly-stage-4231a",
  storageBucket: "firefly-stage-4231a.appspot.com",
  messagingSenderId: "842707613540",
  appId: "1:842707613540:web:9f171d1570f38ef5fbec71",
  measurementId: "G-J1602C0Q38"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const producersCollection = db.collection("producers");

export let authenticated;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App),
      created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.$store.dispatch('logIn')
            }
        });
    },
    }).$mount('#app')    
  }
});

//firebase.auth().onAuthStateChanged(function(user) {
//  if (user) {
//    store.commit('logIn')
//  } else {
//    store.commit('logOut')
//  }
//});


export const selectLabel = "Appuyez sur 'entrer' pour sélectionner";