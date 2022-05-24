<template>
  <Transition name="fade">
    <div
      v-if="!isSubmitted"
      class="grid-cols-1 bg-dblue my-5 text-white p-8 grid gap-10 items-center lgp:grid-cols-2 xl:p-12"
    >
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl font-medium lgp:text-4xl">Have a query?</h1>
        <p class="text-sm md:text-base lgp:text-lg">
          Still not satisfied? Do you have something to share with us? Fill the
          form below and you'll hear from our representatives <u>very</u> soon.
        </p>
      </div>
      <form v-if="true" action="" class="flex flex-col gap-6">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label class="text-xs md:text-sm lgp:text-base" for="company-name"
              >Company Name</label
            >
            <input
              @input="checkValidity"
              type="text"
              id="company-name"
              class="p-2 text-black"
              maxlength="32"
              v-model="form.companyName"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-xs md:text-sm lgp:text-base" for="your-name"
              >Your Name</label
            >
            <input
              @input="checkValidity"
              type="text"
              id="your-name"
              class="p-2 text-black"
              maxlength="64"
              v-model="form.yourName"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-xs md:text-sm lgp:text-base" for="email"
              >Email Address</label
            >
            <input
              @input="checkValidity"
              type="email"
              id="email"
              class="p-2 text-black"
              maxlength="64"
              v-model="form.email"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-xs md:text-sm lgp:text-base" for="phone"
              >Phone Number</label
            >
            <input
              @input="checkValidity"
              type="text"
              id="phone"
              class="p-2 text-black"
              maxlength="16"
              v-model="form.phone"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-xs md:text-sm lgp:text-base" for="message"
            >Your message</label
          >
          <textarea
            @input="checkValidity"
            class="p-2 text-black"
            type="text"
            id="message"
            v-model="form.message"
          />
        </div>
        <BaseButton
          @click.prevent="submitAction"
          class="text-black text-center"
          :class="validClass"
          type="primary"
          >Submit and Send</BaseButton
        >
        <span v-if="isInvalid" class="flex gap-2 text-cardRed"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Please fill all the spaces!</span
        >
      </form>
    </div>

    <div
      v-else
      class="bg-primary my-5 p-10 py-16 flex gap-4 justify-center items-center rounded-lg text-black text-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Submitted</span>
    </div></Transition
  >
</template>

<script>
export default {
  data() {
    return {
      form: {
        companyName: "",
        yourName: "",
        email: "",
        phone: "",
        message: "",
      },
      isSubmitted: false,
      isInvalid: false,
    };
  },
  methods: {
    submitAction() {
      this.checkValidity();
      if (!this.isInvalid) {
        this.isSubmitted = true;
        console.log(this.form);
      } else return;
    },
    checkValidity() {
      if (
        this.form.companyName.length > 5 &&
        this.form.yourName.length > 5 &&
        this.form.email.length > 5 &&
        this.form.phone.length > 10 &&
        this.form.message.length > 10
      )
        this.isInvalid = false;
      else this.isInvalid = true;
    },
  },
  computed: {
    validClass() {
      if (this.isInvalid) return "bg-cardRed";
      else return "";
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
