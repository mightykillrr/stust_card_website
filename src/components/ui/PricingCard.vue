<template>
  <div class="flex flex-col gap-12 justify-between p-9 w-96 bg-white">
    <div class="flex flex-col items-start gap-4">
      <span class="text-2xl font-semibold">{{ title }}</span>
      <p class="text-left text-lgray">{{ desc }}</p>
      <span class="text-5xl font-light">{{ price }}</span>
      <hr class="w-full text-slate-200" />
      <div class="flex flex-col gap-4">
        <div class="flex gap-3" v-for="(text, i) in advantages" :key="i">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-primary"
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
    <BaseButton type="primary">Get Started</BaseButton>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  props: ["title", "desc", "price", "yearlyPrice", "advantages", "type"],
  components: { BaseButton },
  computed: {},
};
</script>
