<template>
  <div
    class="gap-5 px-2 items flex flex-col items-center my-16 text-center lgp:gap-8"
  >
    <span class="tracking-widest font-medium">PRICING PLAN</span>
    <div class="gap-5 flex flex-col items-cente">
      <h2 class="text-4xl text-center lgp:text-5xl">Choose the best for you</h2>
      <p class="text-gray md:mx-24 lgp:mx-64 lgp:text-xl xl:mx-80">
        Choose from our handpicked selection of subscriptions, which fits your
        pocket and satisfies your needs perfectly.
      </p>
    </div>
    <div class="flex bg-white p-0.5">
      <button @click="toggleButtons" :class="toggleMonthly">Monthly</button>
      <button @click="toggleButtons" :class="toggleYearly">Annually</button>
    </div>
    <div
      class="grid grid-cols-1 gap-y-5 justify-items-center lg:grid-cols-3 lg:gap-2 lgp:gap-6"
    >
      <PricingCard
        v-for="(item, i) in pricingChart"
        :key="i"
        :title="item.title"
        :desc="item.desc"
        :price="isMonthly ? item.price : item.yearlyPrice"
        :advantages="item.advantages"
        :type="item.type"
        ref="pricingcard"
      />
    </div>
  </div>
  <a id="contactus" />
</template>

<script>
import PricingCard from "../ui/PricingCard.vue";

export default {
  data() {
    return {
      isMonthly: true,
      pricingChart: [
        {
          title: "Starter",
          desc: "Just starting a new business? Get our smaller plan to try!",
          price: "$49.99",
          yearlyPrice: "$34.99",
          advantages: [
            "Minimalistic",
            "We pick the designs",
            "1K Card Orders",
            "Premium Quality Design",
          ],
          type: "normal",
        },
        {
          title: "Exclusive",
          desc: "Perfection, including everything at a sweet price, most-bought package!",
          price: "$99.99",
          yearlyPrice: "$69.69",
          advantages: [
            "Minimalistic",
            "You choose the designs",
            "50K Card Orders",
            "Over 100K+ designs to pick from",
            "EMV Chip with ServoProtect©",
            "Premium Quality Design",
          ],
          type: "exclusive",
        },
        {
          title: "Premium",
          desc: "Love our service? We provide cards in bulk for our lovers!",
          price: "$179.99",
          yearlyPrice: "$99.99",
          advantages: [
            "Minimalistic",
            "You choose the designs",
            "150K Card Orders",
            "Over 100K+ designs to pick from",
            "EMV Chip with ServoProtect©",
            "No delivery fee",
            "Priority customer care",
            "Personalised designs accepted",
            "Premium Quality Design",
          ],
          type: "normal",
        },
      ],
    };
  },
  computed: {
    toggleMonthly() {
      if (this.isMonthly)
        return "py-3 px-6 transition-all ease-linear duration-75 bg-primary";
      else return "py-3 px-6 transition-all ease-linear duration-75";
    },
    toggleYearly() {
      if (!this.isMonthly)
        return "py-3 px-6 transition-all ease-linear duration-75 bg-primary";
      else return "py-3 px-6 transition-all ease-linear duration-75";
    },
  },
  methods: {
    toggleButtons() {
      this.isMonthly = !this.isMonthly;
      this.$refs.pricingcard.forEach((card) => card.toggleMonth());
    },
  },
  components: { PricingCard },
};
</script>
