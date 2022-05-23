<template>
  <TheHero />
  <PreviewWNumbers />
  <VarientDisplay />
  <AQuote />
  <PricingPlan />
  <GetStartedForm />
</template>

<script>
import AQuote from "../layout/AQuote.vue";
import GetStartedForm from "../layout/GetStartedForm.vue";
import PreviewWNumbers from "../layout/PreviewWNumbers.vue";
import PricingPlan from "../layout/PricingPlan.vue";
import TheHero from "../layout/TheHero.vue";
import VarientDisplay from "../layout/VarientDisplay.vue";

export default {
  components: {
    TheHero,
    PreviewWNumbers,
    VarientDisplay,
    AQuote,
    PricingPlan,
    GetStartedForm,
  },
};
</script>
