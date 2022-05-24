<template>
  <div class="sm:px-4 max-w-screen-xxl mx-auto px-10 bp1:px-16">
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
