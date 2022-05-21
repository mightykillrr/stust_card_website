<template>
  <TheHero />
  <PreviewWNumbers />
  <VarientDisplay />
</template>

<script>
import PreviewWNumbers from "../layout/PreviewWNumbers.vue";
import TheHero from "../layout/TheHero.vue";
import VarientDisplay from "../layout/VarientDisplay.vue";

export default {
  components: {
    TheHero,
    PreviewWNumbers,
    VarientDisplay,
  },
};
</script>
