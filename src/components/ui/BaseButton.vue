<template>
  <a :href="link || '#'" :class="computedClass">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ["type", "link"],
  computed: {
    computedClass() {
      if (this.type === "flat") {
        return "border-2 border-lgray px-6 py-4 font-normal text-black hover:bg-primary  transition-all ease-linear duration-75";
      } else if (this.type === "primary") {
        return "bg-primary px-6 py-5 hover:-translate-y-2 transition-all ease-linear duration-75";
      } else if (this.type === "normal") {
        return "sm:px-4 sm:py-4 bg-primary px-6 py-5 hover:scale-110 hover:-translate-y-2 hover:border-2 transition-all ease-linear duration-75";
      } else if (this.type === "fullBlack") {
        return "bg-black px-6 py-4 font-medium text-white hover:hover:-translate-y-2 hover:border-2 transition-all ease-linear duration-100";
      }
    },
  },
};
</script>
