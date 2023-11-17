<template>
  <div class="relative min-h-screen">
    <!-- Centered div -->
    <div
      class="background-text-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white bg-black"
    >
      <transition name="fade" mode="out-in">
        <h2
          :key="backgroundText"
          class="background-text text-9xl font-bold"
          :class="[
            transitionClasses,
            { 'opacity-0': !isTextVisible, 'opacity-100': isTextVisible },
          ]"
        >
          {{ backgroundText }}
        </h2>
      </transition>
    </div>

    <!-- Grid container -->
    <div
      class="menu absolute top-0 left-0 right-0 bottom-0 grid grid-cols-10 grid-rows-4 gap-3 z-10 p-4"
      :class="[
        transitionClasses,
        { 'opacity-0': !isMenuVisible, 'opacity-100': isMenuVisible },
      ]"
    >
      <!-- Grid items with backdrop blur and semi-transparent background -->
      <div
        class="about-me col-span-4 row-span-2"
        :class="[menuStyling, transitionClasses]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Om mig'), (isTextVisible = true)
        "
      >
        <h3>Om mig</h3>
      </div>
      <div
        class="mina-kunskaper col-span-6 row-span-2"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Mina Kunskaper'),
            (isTextVisible = true)
        "
      >
        <h3>Mina kunskaper</h3>
      </div>
      <div
        class="projekt col-span-3 row-span-2"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Projekt'),
            (isTextVisible = true)
        "
      >
        <h3>Projekt</h3>
      </div>
      <div
        class="projekt col-span-5 row-span-2"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Mina uppgifter'),
            (isTextVisible = true)
        "
      >
        <h3>Mina uppgifter</h3>
      </div>
      <div
        class="projekt col-span-2 row-span-1"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Webbsida'),
            (isTextVisible = true)
        "
      >
        <h3>Webbsida</h3>
      </div>
      <div
        class="projekt col-span-2 row-span-1"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Kontakt'),
            (isTextVisible = true)
        "
      >
        <h3>Kontakt</h3>
      </div>
    </div>
    <AboutMe class="z-10 relative text-red-300" hidden />
    <MinaKunskaper hidden />
    <MinaUppgifter hidden />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe.vue";
import MinaKunskaper from "@/components/MinaKunskaper.vue";
import MinaUppgifter from "@/components/MinaUppgifter.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
    MinaKunskaper,
    MinaUppgifter,
  },
  data() {
    return {
      backgroundText: "Carl Persson",
      isIntroFinished: false,
      menuStyling:
        "rounded-md min-h-full backdrop-blur-md flex items-end justify-start bg-white bg-opacity-5 text-white p-4 ",
      isTextVisible: false,
      isMenuVisible: false,
      isAboutMeActive: false,
      isMinaKunskaperActive: false,
      transitionClasses: "transition-opacity duration-1000 ease-in",
    };
  },
  mounted() {
    new Promise((resolve) => {
      setTimeout(() => {
        this.isTextVisible = true;
        resolve();
      }, 500);
    })
      .then(() => {
        setTimeout(() => {
          this.isTextVisible = false;
        }, 1500);
      })
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            this.isMenuVisible = true;
            this.backgroundText = "";
            this.isIntroFinished = true;
            resolve();
          }, 2500);
        });
      })
      .then(() => {});
  },
  methods: {
    toggleAboutMe() {
      this.isAboutMeActive = !this.isAboutMeActive;
    },
    toggleMinaKunskaper() {
      this.isMinaKunskaperActive = !this.isMinaKunskaperActive;
    },
  },
};
</script>

<style scoped>
.menu > div:hover {
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.5s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
