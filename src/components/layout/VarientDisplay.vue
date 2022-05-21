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
    <div
      class="flex gap-12 justify-center transition-opacity duration-100 ease-linear"
      id="image-holder"
    >
      <img
        :src="cardFront"
        alt="Card Preview Display"
        class="w-3/12 drop-shadow-xl hover:scale-110 transition-scale duration-100 ease-linear"
      />
      <img
        :src="cardBack"
        alt="Card Preview Display"
        class="w-3/12 drop-shadow-xl hover:scale-110 transition-scale duration-100 ease-linear"
      />
    </div>
    <div class="flex gap-2">
      <VarietyButton
        v-for="(color, i) in cardColours"
        :key="i"
        :color="color.color"
        @click="changeSelection"
      />
    </div>
  </div>
</template>

<script>
import VarietyButton from "../ui/VarietyButton.vue";

export default {
  components: { VarietyButton },
  data() {
    return {
      currentColor: "Red",
      cardColours: [
        {
          color: "Red",
          imageFrontURL: this.getImage("Red"),
          imageBackURL: this.getImage("Red", true),
        },
        {
          color: "Aqua",
          imageFrontURL: this.getImage("Aqua"),
          imageBackURL: this.getImage("Aqua", true),
        },
        {
          color: "Yellow",
          imageFrontURL: this.getImage("Yellow"),
          imageBackURL: this.getImage("Yellow", true),
        },
      ],
    };
  },
  computed: {
    cardFront() {
      return this.cardColours.find((c) => c.color === this.currentColor)
        .imageFrontURL;
    },
    cardBack() {
      return this.cardColours.find((c) => c.color === this.currentColor)
        .imageBackURL;
    },
  },
  methods: {
    getImage(color, getBack) {
      return new URL(
        `../assets/card_images/Card${color}${getBack ? "Back" : ""}.svg`,
        import.meta.url
      ).href;
    },

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

      this.currentColor = span.textContent;
    },
  },
};
</script>
