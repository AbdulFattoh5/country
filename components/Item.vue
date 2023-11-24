<template>
  <div class="item" @click="handleClick">
    <nuxt-link :to="`/countryDetail/${encodeURIComponent(country.name.common)}`">
      <img :src="country.flags.png" alt="" class="item__img" />
      <div class="item__desc">
        <h3 class="item__title">{{ country.name.common }}</h3>
        <p class="item__p">
          <span class="item__bold">Population: </span>{{ country.population }}
        </p>
        <p class="item__p">
          <span class="item__bold">Region: </span>{{ country.region }}
        </p>
        <p class="item__p">
          <span class="item__bold">Capital: </span
          >{{
            country.capital && country.capital.length > 0
              ? country.capital[0]
              : "N/A"
          }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    country: Object,
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: "CountryDetailPage",
        params: { name: this.country.name.common },
      });
    },
  },
};
</script>

<style>
.item {
  background: rgb(167, 167, 167);
  max-width: 264px;
  width: 100%;
  height: 400px;
  font-family: sans-serif;
  cursor: pointer;
  transition: 0.3s;
}

.item:hover {
  transform: scale(1.03);
}

.item__img {
  width: 100%;
  margin-bottom: 24px;
  height: 140px;
  object-fit: cover;
}

.item__desc {
  padding: 0 24px 37px;
}

.item__title {
  margin-bottom: 16px;
  color: black;
  text-decoration: none;
}

.item__p {
  margin-bottom: 8px;
  color: black;
  text-decoration: none;
}

.item__bold {
  font-weight: 600;
  color: black;
}
</style>
