<template>
  <div class="px-4 max-w-screen-xxl mx-auto lgp:px-12 xl:px-10">
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
