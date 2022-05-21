<template>
  <button
    class="flex flex-col items-center w-16 gap-1 hover:scale-105 transition-all duration-75 ease-linear"
  >
    <div :class="btnBackgroundClass" />
    <span
      class="text-llgray font-medium transition-all duration-100 ease-linear"
      >{{ color }}</span
    >
  </button>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    btnBackgroundClass() {
      return `w-10 h-10 border-4 border-white bg-card${this.color} rounded-full`;
    },
  },
};
</script>

<style scoped>
.activeBtn {
  @apply drop-shadow-xl;
}

.activeText {
  @apply text-gray font-medium;
}
</style>
