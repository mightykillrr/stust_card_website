<template>
  <button
    @mouseover="isHover = true"
    @mouseleave="isHover = !isHover"
    :class="computedClass"
  >
    <span v-if="isHover">{{ hoverText }}</span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {
      hoverText: "Click Me!",
      isHover: false,
    };
  },
  props: ["type"],
  computed: {
    computedClass() {
      if (this.type === "flat") {
        return "border-2 border-lgray px-6 py-4 font-normal text-black hover:bg-primary  transition-all ease-linear duration-75";
      } else if (this.type === "primary") {
        return "bg-primary px-6 py-5 transition-all ease-linear duration-75";
      } else if (this.type === "fullBlack") {
        return "bg-black px-6 py-4 font-medium text-white";
      }
    },
  },
};
</script>
