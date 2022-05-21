<template>
  <div class="max-w-screen-xxl mx-auto px-4">
    <TheNavBar />
    <MainPage />
  </div>
  <TheFooter />
</template>

<script>
import TheNavBar from "./components/layout/TheNavBar.vue";
import MainPage from "./components/pages/MainPage.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: { MainPage, TheNavBar, TheFooter },
};
</script>
