<!-- <template>
  <header class="header">
    <v-container>
      <div class="header__wrap">
        <h1 class="header__logo">Where in the world?</h1>
        <v-btn class="header__btn" @click="toggleDarkMode">
          <v-img
            :src="isDarkMode ? require('@/assets/img/header-btn.png') : require('@/assets/img/header-btn-d.png')"
          ></v-img>
          {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </v-btn>
      </div>
    </v-container>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
  mounted() {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      this.isDarkMode = JSON.parse(storedDarkMode);
    }
  },
};
</script>

<style>
.header {
  padding: 10px 0;
  margin-bottom: 40px;
}

.header,
.item,
select {
  background: rgb(197, 197, 197);
}

body {
  background: white;
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
  font-weight: 600px;
  cursor: pointer;
}
</style> -->

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
export default {
  name: "Navbar",
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("darkMode", this.isDarkMode);
    },
  },
  mounted() {
    // Retrieve the user's preference from localStorage.
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      this.isDarkMode = JSON.parse(storedDarkMode);
    }
  },
};
</script>

<style>
.header {
  background: rgb(167, 167, 167);
  padding: 10px 0;
  margin-bottom: 40px;
  transition: 0.5s; /* Smooth transition for background color */
}

.darkMode {
  background: rgb(32, 32, 32); /* Dark mode background color */
  color: white; /* Dark mode text color */
}

body {
  background: white; /* Light mode body background color */
  color: black; /* Light mode body text color */
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
