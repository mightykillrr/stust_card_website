<template>
  <div
    class="flex flex-col p-5 gap-12 my-8 py-10 items-center bg-white rounded-lg md:flex-row md:p-10 lgp:p-16"
  >
    <img :src="getImage" class="w-5/6 lgp:w-3/6" alt="Card layers" />
    <div class="gap-5 flex flex-col md:w-11/12">
      <span class="tracking-widest font-medium">QUALITY</span>
      <h2 class="text-3xl lgp:text-5xl">Why should you choose our card?</h2>
      <p class="text-lgray lgp:text-lg">
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
        <span class="text-base lgp:text-lg">Minimalistic</span>
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
        <span class="text-base lgp:text-lg">Clean and Unique</span>
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
        <span class="text-base lgp:text-lg">Premium Design Quality</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getColor() {
      const clss = [...document.documentElement.classList].slice(-1)[0];
      if (["lime", "red", "aqua", "purple"].includes(clss))
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
