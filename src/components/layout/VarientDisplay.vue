<template>
  <div class="flex flex-col items-center my-32 gap-12">
    <div class="flex flex-col items-center w-2/6 text-center gap-5">
      <span class="tracking-widest font-medium">VARIANT</span>
      <h2 class="text-5xl text-center">
        Choose the color<br />variant you like
      </h2>
      <p class="text-gray">
        We have a various color variations so you don't get bored with
        monotonous and mainstream colors
      </p>
    </div>
    <BaseButton type="primary">Get Started</BaseButton>
    <div class="flex gap-12 justify-center">
      <img
        :src="require(locationFront)"
        alt="Card Front"
        class="w-3/12 drop-shadow-xl"
      />
      <img :src="locationBack" alt="Card Back" class="w-3/12 drop-shadow-xl" />
    </div>
    <div class="flex gap-2">
      <button
        class="flex flex-col items-center w-16 gap-1 hover:scale-105 transition-all duration-75 ease-linear"
        @click="changeSelection"
      >
        <div
          class="w-10 h-10 border-4 border-white bg-cardRed rounded-full activeBtn"
          id="btn-variant"
        />
        <span id="btn-variant-text" class="text-llgray activeText">Red</span>
      </button>
      <button
        class="flex flex-col items-center w-16 gap-1 hover:scale-105 transition-all duration-75 ease-linear"
        @click="changeSelection"
      >
        <div
          class="w-10 h-10 border-4 border-white bg-cardAqua rounded-full"
          id="btn-variant"
        />
        <span id="btn-variant-text" class="text-llgray">Aqua</span>
      </button>
      <button
        class="flex flex-col items-center w-16 gap-1 hover:scale-105 transition-all duration-75 ease-linear"
        @click="changeSelection"
      >
        <div
          class="w-10 h-10 border-4 border-white bg-cardYellow rounded-full"
          id="btn-variant"
        />
        <span id="btn-variant-text" class="text-llgray">Yellow</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentColor: "Red",
    };
  },
  computed: {
    locationFront() {
      return `../../assets/card_images/Card${this.currentColor}.svg`;
    },
    locationBack() {
      return `../../assets/card_images/Card${this.currentColor}Back.svg`;
    },
  },
  methods: {
    changeCurrentCard(color) {},
    changeSelection(e) {
      document.querySelectorAll("#btn-variant").forEach((button) => {
        button.classList.remove("activeBtn");
      });

      document.querySelectorAll("#btn-variant-text").forEach((text) => {
        text.classList.remove("activeText");
      });

      const [div, span] = e.currentTarget.children;

      div.classList.add("activeBtn");
      span.classList.add("activeText");
    },
  },
};
</script>

<style scoped>
.activeBtn {
  @apply drop-shadow-xl;
}

.activeText {
  @apply text-gray;
}
</style>
