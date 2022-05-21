<template>
  <TheHero />
  <PreviewWNumbers />
  <VarientDisplay />
  <AQuote />
  <OurValue />
  <PricingPlan />
</template>

<script>
import AQuote from "../layout/AQuote.vue";
import OurValue from "../layout/OurValue.vue";
import PreviewWNumbers from "../layout/PreviewWNumbers.vue";
import PricingPlan from "../layout/PricingPlan.vue";
import TheHero from "../layout/TheHero.vue";
import VarientDisplay from "../layout/VarientDisplay.vue";
export default {
  components: {
    TheHero,
    PreviewWNumbers,
    VarientDisplay,
    OurValue,
    AQuote,
    PricingPlan,
  },
};
</script>
