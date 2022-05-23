<template>
  <div class="flex flex-col items-center my-32 gap-12">
    <div class="flex flex-col items-center w-2/6 text-center gap-5">
      <span class="tracking-widest font-medium">VARIANTS</span>
      <h2 class="text-5xl text-center">
        Select the color<br />variant you love
      </h2>
      <p class="text-gray">
        Be <u>unique</u> with our huge colour palette, far far away from those
        plain traditional cards, for you to choose from.
      </p>
    </div>
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
