<template>
  <a id="home"></a>
  <nav
    class="flex justify-between my-2 py-4 px-3 opacity-90 backdrop-blur-md -text-gray items-center sticky top-0 bg-zinc-100 z-30"
  >
    <a href="#home" class="font-logo font-semibold text-4xl">stust</a>
    <ul class="hidden md:flex lg:gap-8 gap-12 items-center">
      <li class="hover:border-b-2 border-lgray">
        <a href="#aboutus">About us</a>
      </li>
      <li class="hover:border-b-2 border-lgray">
        <a href="#features">Features</a>
      </li>
      <li class="hover:border-b-2 border-lgray">
        <a href="#pricing">Pricing</a>
      </li>
      <li class="hover:border-b-2 border-lgray">
        <a href="#contactus">Contact us</a>
      </li>
      <li>
        <BaseButton type="flat">Get Started</BaseButton>
      </li>
    </ul>
    <div
      class="md:hidden flex flex-col items-end gap-5 w-full absolute top-0 right-0 pt-5"
    >
      <svg
        v-if="!isNavVisible"
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        @click="toggleVisibility"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-if="isNavVisible"
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        @click="toggleVisibility"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <Transition name="nav_fade">
        <ul
          v-if="isNavVisible"
          class="flex flex-col w-full gap-2 items-center bg-gray text-center text-white py-12 rounded-md"
        >
          <li class="py-4 w-full">
            <a href="#aboutus" @click="toggleVisibility">About us</a>
          </li>
          <li class="py-4 w-full">
            <a href="#features" @click="toggleVisibility">Features</a>
          </li>
          <li class="py-4 w-full">
            <a href="#pricing" @click="toggleVisibility">Pricing</a>
          </li>
          <li class="py-4 w-full">
            <a href="#contactus" @click="toggleVisibility">Contact us</a>
          </li>
        </ul>
      </Transition>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      isNavVisible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.isNavVisible = !this.isNavVisible;
    },
  },
};
</script>

<style>
.nav_fade-enter-active,
.nav_fade-leave-active {
  transition: opacity 0.2s ease;
}

.nav_fade-enter-from,
.nav_fade-leave-to {
  opacity: 0;
}
</style>
