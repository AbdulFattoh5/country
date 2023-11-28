<template>
  <header class="header" :class="{ darkMode: isDarkMode }">
    <v-container>
      <div class="header__wrap">
        <h1 class="header__logo">Where in the world?</h1>
        <v-btn class="header__btn" @click="toggleDarkMode">
          <v-img
            :src="
              isDarkMode
                ? require('@/assets/img/header-btn.png')
                : require('@/assets/img/header-btn-d.png')
            "
          ></v-img>
          {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
        </v-btn>
      </div>
    </v-container>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    ...mapGetters({
      isDarkModeState: "isDarkMode",
    }),
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$store.commit("setIsDarkMode", this.isDarkMode);
      window.localStorage.setItem("darkMode", this.isDarkMode);
      // document.body.style.background = this.isDarkMode ? "#323232" : "white";
      // document.body.style.color = this.isDarkMode ? "white" : "black";
    },
  },
  mounted() {
    const storedDarkMode = window.localStorage.getItem("darkMode");
    console.log(storedDarkMode);
    if (storedDarkMode !== null) {
      this.isDarkMode = storedDarkMode === "true";
      this.$store.commit("setIsDarkMode", this.isDarkMode);
    }
  },
};
</script>

<style>
.header {
  background: rgb(167, 167, 167);
  padding: 10px 0;
  margin-bottom: 40px;
  transition: 0.3s;
}

.darkMode {
  background: rgb(32, 32, 32);
  color: white;
}

body {
  background: rgb(124, 124, 124);
}

.header__wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-family: sans-serif;
}

.header__btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
</style>
