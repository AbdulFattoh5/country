<template>
  <div class="item">
    <nuxt-link :to="`/countryDetail/${country.name.common}`">
      <img :src="country?.flags?.png" alt="" class="item__img" />
      <div class="item__desc" :class="{ darkMode: dark }">
        <h3 class="item__title">{{ country?.name?.common }}</h3>
        <p class="item__p">
          <span class="item__bold">Population: </span>{{ country?.population }}
        </p>
        <p class="item__p">
          <span class="item__bold">Region: </span>{{ country?.region }}
        </p>
        <p class="item__p">
          <span class="item__bold">Capital: </span
          >{{
            country?.capital && country?.capital.length > 0
              ? country?.capital[0]
              : "N/A"
          }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Item",
  props: {
    country: Object,
  },
  data() {
    return {
      dark: false,
    };
  },
  computed: {
    ...mapGetters({
      isDarkModeState: "isDarkMode",
    }),
  },
  watch: {
    isDarkModeState(val) {
      this.dark = val;
    },
  },
  mounted() {
    const storedDarkMode = window.localStorage.getItem("darkMode");
    console.log(storedDarkMode);
    if (storedDarkMode !== null) {
      this.dark = storedDarkMode === "true";
    }
  },
};
</script>

<style>
* {
  text-decoration: none;
}

.item {
  background: white;
  max-width: 264px;
  width: 100%;
  font-family: sans-serif;
  cursor: pointer;
  transition: 0.3s;
}

.item:hover {
  transform: scale(1.03);
}

.item__img {
  width: 100%;
  margin-bottom: -4px;
  height: 140px;
  object-fit: cover;
}

.item__desc {
  padding: 26px 24px;
  transition: 0.3s;
}

.item__title {
  margin-bottom: 16px;
}

.item__p {
  margin-bottom: 8px;
}

.item__bold {
  font-weight: 600;
}
</style>
