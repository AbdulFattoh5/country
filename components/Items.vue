<template>
  <div class="container">
    <div class="sort">
      <input
        @input="filterCountries"
        type="text"
        v-model="search"
        placeholder="Search for a city"
      />
      <select name="select" v-model="filter" @change="filterCountries">
        <option value="">Filter by region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
    <div v-if="selectedCountry === null" class="items__wrap">
      <Item
        v-for="(country, i) in countries"
        :key="i"
        :country="country"
        @click="showCountryDetails(country)"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Item from "./Item.vue";
import Itemdetail from "./Itemdetail.vue";
export default {
  name: "Items",
  components: {
    Item,
    Itemdetail,
  },
  data() {
    return {
      allcountries: [],
      countries: [],
      search: "",
      filter: "",
      selectedCountry: null,
    };
  },
  methods: {
    async asyncData() {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        this.allcountries = res.data;
        this.countries = [...this.allcountries];
        console.log(this.countries); // Copy the data to countries
      } catch (error) {
        console.log(error);
      }
    },
    filterCountries() {
      this.selectedCountry = null;
      let filtered = [...this.allcountries];

      // search function
      if (this.search) {
        const searchTerm = this.search.toLocaleLowerCase();
        filtered = filtered.filter(
          (country) =>
            country.name.common.toLocaleLowerCase().includes(searchTerm) ||
            country.region.toLocaleLowerCase().includes(searchTerm)
        );
      }

      // filtering countries
      if (this.filter) {
        filtered = filtered.filter((country) => {
          const countryRegion = country.region.toLocaleLowerCase();
          return countryRegion === this.filter;
        });
      }
      this.countries = filtered; // Update the countries data
    },
    showCountryDetails(country) {
      this.selectedCountry = country;
      this.$router.push({
        name: "CountryDetailPage",
        params: { name: country.name.common },
        query: { selectedCountry: JSON.stringify(country) }, // Pass country data as a query parameter
      });
    },
    hideCountryDetails() {
      this.selectedCountry = null;
    },
  },
  mounted() {
    this.asyncData();
  },
};
</script>

<style>
.items__wrap {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
}

.container {
  max-width: 1230px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

.sort {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
</style>
