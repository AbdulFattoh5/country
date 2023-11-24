<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <h1 class="header__logo">Where in the world?</h1>
        <button class="header__btn">
          <img
            src="@/assets/img/header-btn-d.png"
            alt=""
            class="header__btn-img"
          />
          Dark Mode
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
.container {
  max-width: 1230px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  background: rgb(197, 197, 197);
  padding: 10px 0;
  margin-bottom: 40px;
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
</style>
