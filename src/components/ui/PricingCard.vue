<template>
  <div :class="mainDiv">
    <div class="flex flex-col items-start gap-4">
      <span class="text-2xl font-semibold">{{ title }}</span>
      <p class="text-left text-lgray">{{ desc }}</p>
      <span class="text-5xl font-light"
        >{{ price
        }}<span v-if="showMonthly" class="text-sm"> /month</span></span
      >
      <hr class="w-full text-black" />
      <div class="flex flex-col gap-4">
        <div class="flex gap-3" v-for="(text, i) in advantages" :key="i">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="checkmarkColor"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{{ text }}</span>
        </div>
      </div>
    </div>
    <BaseButton :type="buttonType">Count me in!</BaseButton>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  data() {
    return {
      showMonthly: false,
    };
  },
  methods: {
    toggleMonth() {
      this.showMonthly = !this.showMonthly;
    },
  },
  props: ["title", "desc", "price", "yearlyPrice", "advantages", "type"],
  components: { BaseButton },
  computed: {
    mainDiv() {
      if (this.type === "normal")
        return "flex flex-col gap-12 justify-between p-9 w-96 bg-white";
      else return "flex flex-col gap-12 justify-between p-9 w-96 bg-primary";
    },
    checkmarkColor() {
      if (this.type === "normal") return "h-6 w-6 text-primary";
      else return "h-6 w-6 text-black";
    },
    buttonType() {
      if (this.type === "normal") return "primary";
      else return "fullBlack";
    },
  },
};
</script>
