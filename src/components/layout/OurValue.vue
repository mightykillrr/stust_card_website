<template>
  <div
    class="flex items-center justify-center my-24 py-12 gap-24 bg-white rounded-lg"
  >
    <img :src="getImage" class="w-4/12" alt="Card layers" />
    <div class="flex flex-col gap-6 w-5/12">
      <span class="tracking-widest font-medium">QUALITY</span>
      <h2 class="text-5xl">Why should you choose our card?</h2>
      <p class="text-lgray">
        We treat our business, very seriously, so you could relax and focus on
        what's important to you while we handle the rest. We leave no space for
        dust to settle.
      </p>
      <div class="flex gap-5 items-center">
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
        <span class="text-xl">Minimalistic</span>
      </div>
      <div class="flex gap-5 items-center">
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
        <span class="text-xl">Clean and Unique</span>
      </div>
      <div class="flex gap-5 items-center">
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
        <span class="text-xl">Premium Design Quality</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getColor() {
      const clss = [...document.documentElement.classList].slice(-1)[0];
      if (["yellow", "red", "aqua", "purple"].includes(clss))
        return `${clss[0].toUpperCase()}${clss.slice(1)}`;
      else return "Purple";
    },
  },
  computed: {
    getImage() {
      return new URL(
        `../assets/card_images/Card${this.getColor()}Transparency.png`,
        import.meta.url
      ).href;
    },
  },
};
</script>
