<template>
  <div>
    <Navbar />
    <Items />
  </div>
</template>

<script>
import Items from "../components/Items.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "IndexPage",
  components: {
    Navbar,
    Items,
  },
  data() {
    return {};
  },
};
</script>

<style>

</style>
