<template>
  <TheHero />
  <PreviewWNumbers />
  <VarientDisplay />
  <AQuote />
  <OurValue />
</template>

<script>
import AQuote from "../layout/AQuote.vue";
import OurValue from "../layout/OurValue.vue";
import PreviewWNumbers from "../layout/PreviewWNumbers.vue";
import TheHero from "../layout/TheHero.vue";
import VarientDisplay from "../layout/VarientDisplay.vue";

export default {
  components: {
    TheHero,
    PreviewWNumbers,
    VarientDisplay,
    OurValue,
    AQuote,
  },
};
</script>
