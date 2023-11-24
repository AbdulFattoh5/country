<template>
  <v-container class="country">
    <v-btn class="country__btn" @click="goBack"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="call-made"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"></path></g></svg>Back</v-btn>
    <div class="country__wrap">
      <img :src="country?.flags?.png" alt="" class="country__flag" />
      <div class="country__desc">
        <h1 class="country__title">{{ country?.name?.common }}</h1>
        <div class="country__desc-wrap">
          <div class="country__data-l">
            <p class="country__data">
             <strong>Native Name: </strong>{{country?.name?.official}}
            </p>
            <p class="country__data"><strong>Population: </strong> {{country?.population}}</p>
            <p class="country__data"><strong>Region: </strong> {{country?.region}}</p>
            <p class="country__data"><strong>Sub Region: </strong> {{country?.subregion}}</p>
            <p class="country__data"><strong>Capital: </strong> {{country?.capital[0]}}</p>
          </div>
          <div class="country__data-r">
            <p class="country__data"><strong>Top level domain: </strong> {{country?.tld[0]}}</p>
            <p class="country__data">
              <strong>Currencies: </strong> {{country?.currencies[Object.keys(country.currencies)[0]].name}} 
            </p>
            <p class="country__data"><strong>Languages: </strong> {{formattedLanguages }}</p>
          </div>
        </div>
        <div class="country__borders">
          <h1 class="country__borders-h">Borders</h1>
          <div v-for="border in country?.borders" :key="border" class="country__borders-item">{{ border }}</div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Itemdetail",
  props: {
    country: Object,
  },
  methods: {
    goBack() {
      this.$emit("back");
    },
  },
  computed: {
    formattedLanguages() {
      if (this.country && this.country.languages) {
        const languageNames = Object.values(this.country.languages);
        return languageNames.join(', ');
      }
      return '';
    }
  },
};
</script>

<style>
.country__btn{
  background-color: #fff;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 0 7px rgba(0,0,0,.293);
  color: #111517;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 90px;
  padding: 10px 32px 10px 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.country__wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.country__flag {
  height: 401px;
  width: 560px;
  border-radius: 10px;
  box-shadow: 0 0 14px 4px rgba(0, 0, 0, 0.029);
}

.country__title {
  font-family: sans-serif;
  color: #111517;
  font-size: 32px;
  font-weight: 800;
  line-height: 44px;
  margin: 0 0 23px;
}

.country__desc-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.country__data{
  font-family: sans-serif;
}

.country__borders{
  display: flex;
  align-items: center;
}
.country__borders-h{
  font-family: sans-serif;
  margin-right: 20px;
  font-size: 30px;
}

.country__borders-item{
  border: 2px solid gray;
  border-radius: 8px;
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
}

</style>
