<template>
  <div class="my-16 px-3 flex flex-col items-center gap-8 md:gap-12 lgp:gap-16">
    <div
      class="flex flex-col items-center text-center gap-2 md:gap-4 md:mx-10 xxl:gap-7"
    >
      <span class="tracking-widest font-medium">VARIANTS</span>
      <h2 class="text-3xl text-center md:text-4xl lgp:text-5xl">
        Select the color<br />variant you love
      </h2>
      <p class="text-gray lg:mx-24 lgp:text-lg lgp:mx-48 lgp:text-xl">
        Be <u>unique</u> with our huge colour palette, far far away from those
        plain traditional cards, for you to choose from.
      </p>
    </div>
    <div
      class="gap-5 grid grid-cols-2 md:w-9/12 justify-center transition-opacity duration-100 ease-linear lg:w-7/12 lgp:gap-10 lgp:w-6/12"
      id="image-holder"
    >
      <img
        :src="cardFront"
        alt="Card Preview Display"
        class="drop-shadow-xl hover:scale-110 transition-scale duration-100 ease-linear"
      />
      <img
        :src="cardBack"
        alt="Card Preview Display"
        class="drop-shadow-xl hover:scale-110 transition-scale duration-100 ease-linear"
      />
    </div>
    <div id="options-holder" class="flex gap-2">
      <VarietyButton
        v-for="(color, i) in cardColours"
        :key="i"
        :color="color.color"
        @click="changeSelection"
      />
    </div>
  </div>
  <OurValue :key="updateVal" />
</template>

<script>
import VarietyButton from "../ui/VarietyButton.vue";
import OurValue from "./OurValue.vue";

export default {
  components: { VarietyButton, OurValue },
  data() {
    return {
      currentColor: "Purple",
      updateVal: 0,
      cardColours: [
        {
          color: "Purple",
          imageFrontURL: this.getImage("Purple"),
          imageBackURL: this.getImage("Purple", true),
        },
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
          color: "Lime",
          imageFrontURL: this.getImage("Lime"),
          imageBackURL: this.getImage("Lime", true),
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
      const [div, span] = e.currentTarget.children;
      const classArr = [...document.documentElement.classList];
      console.log(classArr.slice(-1)[0]);

      if (span.textContent === this.currentColor) return;
      const imageHolder = document.querySelector("#image-holder");
      imageHolder.style.opacity = 0;

      const holderChildren = [
        ...document.querySelector("#options-holder").children,
      ];
      holderChildren.forEach((node) => {
        const [div, span] = node.children;
        div.classList.remove("activeBtn");
        span.classList.remove("activeText");
      });

      div.classList.add("activeBtn");
      span.classList.add("activeText");

      setTimeout(() => {
        this.currentColor = span.textContent;
        imageHolder.style.opacity = 100;
      }, 300);

      ["aqua", "red", "lime", "aqua"].forEach((color) => {
        document.documentElement.classList.remove(color);
      });

      document.documentElement.classList.add(span.textContent.toLowerCase());
      this.updateVal++;
    },
  },
  mounted() {
    const [div, span] = [
      ...document.querySelector("#options-holder").children,
    ][0].children;

    div.classList.add("activeBtn");
    span.classList.add("activeText");
  },
};
</script>
