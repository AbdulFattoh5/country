<template>
  <div>
    <CountryDetail :country="selectedCountry" @back="hideCountryDetails" />
  </div>
</template>

<script>
import CountryDetail from "@/components/Itemdetail.vue";

export default {
  name: "CountryDetailPage",
  components: {
    CountryDetail,
  },
  data() {
    return {
      selectedCountry: null,
    };
  },
  methods: {
    hideCountryDetails() {
      this.selectedCountry = null;
      this.$router.push({ name: "index" });
    },
    async fetchCountryDetailsByName(countryName) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
        console.log("API Response: ", data);
        if (response.ok) {
          // Assuming the data structure from the API
          const countryDetails = data[0];
          return countryDetails;
        } else {
          throw new Error("Failed to fetch country details");
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
        this.$emit("error", error.message);
        throw error;
      }
    },
    async asyncData({ params }) {
      try {
        const countryName = params.name;
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();

        if (response.ok) {
          const countryDetails = data[0];
          return { selectedCountry: countryDetails };
        } else {
          throw new Error("Failed to fetch country details");
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
        // Handle the error appropriately
        throw error;
      }
    },
  },
};
</script>
