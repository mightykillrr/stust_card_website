<template>
  <button
    class="flex flex-col items-center w-16 gap-1 hover:scale-105 transition-all duration-75 ease-linear"
  >
    <div :class="btnBackgroundClass" />
    <span
      class="bbtn-text text-llgray font-medium transition-all duration-100 ease-linear"
      >{{ color }}</span
    >
  </button>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    btnBackgroundClass() {
      if (this.color === "Purple")
        return "bbtn w-10 h-10 border-4 border-white rounded-full bg-cardPurple";
      else if (this.color === "Aqua")
        return "bbtn w-10 h-10 border-4 border-white rounded-full bg-cardAqua";
      else if (this.color === "Red")
        return "bbtn w-10 h-10 border-4 border-white rounded-full bg-cardRed";
      else
        return "bbtn w-10 h-10 border-4 border-white rounded-full bg-cardYellow";
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
