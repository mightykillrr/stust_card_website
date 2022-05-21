<template>
  <div class="flex flex-col items-center my-16 text-center gap-8">
    <span class="tracking-widest font-medium">PRICING PLAN</span>
    <div class="flex flex-col items-center gap-5">
      <h2 class="text-5xl text-center">Choose our best offer</h2>
      <p class="text-gray w-6/12">
        When you work on something that only has the capacity to make you 5
        dollars, it does not matter how much harder you work - the most you will
        make is 5 dollars.
      </p>
    </div>
    <div class="flex bg-white p-0.5">
      <button class="py-3 px-6 bg-primary">Monthly</button>
      <button class="py-3 px-6">Annually</button>
    </div>
    <div class="flex gap-7">
      <PricingCard
        v-for="(item, i) in pricingChart"
        :key="i"
        :title="item.title"
        :desc="item.desc"
        :price="item.price"
        :yearlyPrice="item.yearlyPrice"
        :advantages="item.advantages"
        :type="item.type"
      />
    </div>
  </div>
</template>

<script>
import PricingCard from "../ui/PricingCard.vue";

export default {
  data() {
    return {
      pricingChart: [
        {
          title: "Economy",
          desc: "For those of you who are poor, you must choose this package",
          price: "$12",
          yearlyPrice: "$9",
          advantages: [
            "Simplicity",
            "Easy to use",
            "Premium quality design",
            "For lower middle",
          ],
          type: "normal",
        },
        {
          title: "Exclusive",
          desc: "This package is for you, the uppser middle class, but it's still better",
          price: "$25",
          yearlyPrice: "$18",
          advantages: [
            "Simplicity",
            "Easy to use",
            "Premium quality design",
            "For upper middle",
            "Limited edition",
          ],
          type: "exclusive",
        },
        {
          title: "Priority",
          desc: "If you are rich, choose this package, because this package is special",
          price: "$75",
          yearlyPrice: "$53",
          advantages: [
            "Simplicity",
            "Easy to use",
            "Premium quality design",
            "For crazy rich",
            "Limited edition",
            "Be our priority",
          ],
          type: "primary",
        },
      ],
    };
  },
  components: { PricingCard },
};
</script>
