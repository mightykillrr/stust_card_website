<template>
  <div class="flex items-center justify-center my-32 gap-24">
    <img :src="getImage" class="w-4/12" alt="Card layers" />
    <div class="flex flex-col gap-6 w-5/12">
      <span class="tracking-widest font-medium">OUR VALUE</span>
      <h2 class="text-5xl">The best advantages of our card</h2>
      <p class="text-lgray">
        If the financial system has a defect, it is that it reflects and
        magnifies what we human beings are like. Money amplifies our tendency to
        overreact.
      </p>
      <div class="flex gap-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
        <span class="text-xl">Simplicity</span>
      </div>
      <div class="flex gap-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
        <span class="text-xl">Easy to use</span>
      </div>
      <div class="flex gap-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
        <span class="text-xl">Premium quality design</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getImage() {
      return new URL(
        `../assets/card_images/CardTransparency.png`,
        import.meta.url
      ).href;
    },
  },
};
</script>
