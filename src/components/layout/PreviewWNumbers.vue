<template>
  <div class="bg-dblue flex flex-col gap-16 pb-32 rounded-lg">
    <div class="flex gap-5 justify-center">
      <img
        src="../assets/card_images/CardAqua.svg"
        alt="Card Preview Image"
        class="w-2/12 -translate-y-12 transition-all ease-linear duration-100 hover:scale-110"
      />
      <img
        src="../assets/card_images/CardRed.svg"
        alt="Card Preview Image"
        class="w-2/12 -translate-y-24 transition-all ease-linear duration-100 hover:scale-110"
      />
      <img
        src="../assets/card_images/CardYellow.svg"
        alt="Card Preview Image"
        class="w-2/12 -translate-y-32 transition-all ease-linear duration-100 hover:scale-110"
      />
    </div>
    <div>
      <ul class="flex justify-around text-white">
        <li class="flex flex-col items-center gap-3">
          <span class="text-5xl">0%</span>
          <span class="text-llgray">Downtime</span>
        </li>
        <li class="flex flex-col items-center gap-3">
          <span class="text-5xl">128k</span>
          <span class="text-llgray">Members</span>
        </li>
        <li class="flex flex-col items-center gap-3">
          <span class="text-5xl">>146k</span>
          <span class="text-llgray">Reviews</span>
        </li>
        <li class="flex flex-col items-center gap-3">
          <span class="text-5xl">89+</span>
          <span class="text-llgray">Partners</span>
        </li>
      </ul>
    </div>
  </div>
  <a id="features" />
</template>
