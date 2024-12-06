import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi, fa },
  },

  components,
  directives,
});

const firebaseConfig = {
  apiKey: "AIzaSyCx3O7zO97ORRGwClNoGFY-eENqbBoRMRQ",
  authDomain: "webdev-project5.firebaseapp.com",
  projectId: "webdev-project5",
  storageBucket: "webdev-project5.firebasestorage.app",
  messagingSenderId: "176860175743",
  appId: "1:176860175743:web:5b8bb15640749e83984e4a",
  measurementId: "G-F7X19QV78M"
};

const myapp: FirebaseApp = initializeApp(firebaseConfig)
const db: Firestore = getFirestore(myapp)
const pinia = createPinia();
createApp(App).use(vuetify).use(pinia).use(router).mount("#app");
