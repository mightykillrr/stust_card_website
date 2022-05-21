<template>
  <button :class="computedClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type"],
  computed: {
    computedClass() {
      if (this.type === "flat") {
        return "border-2 border-lgray px-6 py-4 font-medium text-black hover:bg-black hover:text-white transition-all ease-linear duration-75";
      } else if (this.type === "primary") {
        return "bg-primary px-6 py-4 font-medium";
      }
    },
  },
};
</script>
