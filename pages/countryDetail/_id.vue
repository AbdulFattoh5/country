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
    async asyncData() {
      try {
        const countryName = this.$route.params.id;
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
        console.log("API Response: ", data);
        if (response.ok) {
          const countryDetails = data[0];
          this.selectedCountry = countryDetails;
          return { selectedCountry: countryDetails };
        } else {
          throw new Error("Failed to fetch country details");
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
        return { error: error.message };
      }
    },
    hideCountryDetails() {
      this.$router.push({ name: "index" });
    },
  },
  mounted(){
    this.asyncData()
  }
};
</script>
