<template>
  <div class="relative min-h-screen z-0 overflow-auto bg-black">
    <!-- Centered div -->
    <div
      class="background-text-container min-h-screen min-w-full flex justify-center items-center overflow-auto text-white"
    >
      <transition name="fade" mode="out-in">
        <h2
          v-if="!isEnteringMenu"
          :key="backgroundText"
          class="background-text text-5xl md:text-9xl font-bold z-10"
          :class="[
            transitionClasses,
            { 'opacity-0': !textVisible, 'opacity-100': textVisible },
          ]"
        >
          {{ backgroundText }}
        </h2>
      </transition>
      <transition name="fade" mode="out-in">
        <div
          class="selected-option absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white"
          :class="
            !menuVisible ? 'z-40 min-h-full opacity-100' : 'z-10 opacity-0'
          "
          :key="!menuVisible"
        >
          <a
            v-if="!menuVisible && isIntroFinished && !isInSingleTask"
            class="text-5xl absolute top-0 right-0 p-4 cursor-pointer z-50"
            @click="enteringMenu"
            >X</a
          >
          <AboutMe v-if="isAboutMeActive" key="AboutMe" />
          <MinaKunskaper v-if="isMinaKunskaperActive" key="MinaKunskaper" />
          <MinaProjekt v-if="isMinaProjekt" key="MinaProjekt" />
          <MinaUppgifter
            v-if="isMinaUppgifterActive"
            key="MinaUppgifter"
            @value-changed="handleIsInSingleTask"
          />
          <SocialaMedier v-if="isSocialaMedierActive" key="SocialaMedier" />
        </div>
      </transition>
    </div>

    <!-- Grid container -->
    <div
      class="main-menu absolute top-0 left-0 right-0 bottom-0 grid grid-cols-1 md:grid-cols-10 md:grid-rows-4 gap-y-3 md:gap-3 z-10 p-4"
      :class="[
        transitionClasses,
        { 'opacity-0': !menuVisible, 'opacity-100': menuVisible },
      ]"
    >
      <!-- Grid items with backdrop blur and semi-transparent background -->
      <div
        class="about-me col-span-4 md:row-span-2"
        :class="[menuStyling, transitionClasses]"
        @mouseenter="
          isIntroFinished &&
            ((backgroundText = 'Om mig'),
            isIntroFinished && menuVisible && (textVisible = true))
        "
        @mouseleave="isIntroFinished && (textVisible = false)"
        @click="enteringOption('aboutMe')"
      >
        <h3>Om mig</h3>
      </div>
      <div
        class="mina-kunskaper col-span-6 md:row-span-2"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Kunskaper & Erfarenhet'),
            isIntroFinished && menuVisible && (textVisible = true)
        "
        @mouseleave="isIntroFinished && (textVisible = false)"
        @click="enteringOption('minaKunskaper')"
      >
        <h3>{{ "Kunskaper & Erfarenhet" }}</h3>
      </div>
      <div
        class="projekt col-span-3 md:row-span-2"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Projekt'),
            isIntroFinished && menuVisible && (textVisible = true)
        "
        @mouseleave="isIntroFinished && (textVisible = false)"
        @click="enteringOption('projekt')"
      >
        <h3>Projekt</h3>
      </div>
      <div
        class="mina-uppgifter col-span-5 md:row-span-2"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Mina uppgifter'),
            isIntroFinished && menuVisible && (textVisible = true)
        "
        @mouseleave="isIntroFinished && (textVisible = false)"
        @click="enteringOption('minaUppgifter')"
      >
        <h3>Mina uppgifter</h3>
      </div>

      <a
        href="https://my-portfolio-psi-three-32.vercel.app/"
        class="webbsida col-span-2 row-span-1"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Webbsida'),
            isIntroFinished && menuVisible && (textVisible = true)
        "
        @mouseleave="isIntroFinished && (textVisible = false)"
      >
        <h3>Webbsida</h3>
      </a>
      <div
        class="kontakt col-span-full md:col-span-2 md:row-span-1"
        :class="[menuStyling]"
        @mouseenter="
          isIntroFinished && (backgroundText = 'Kontakt'),
            isIntroFinished && menuVisible && (textVisible = true)
        "
        @mouseleave="isIntroFinished && (textVisible = false)"
        @click="enteringOption('kontakt')"
      >
        <h3>Kontakt</h3>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe.vue";
import MinaKunskaper from "@/components/MinaKunskaper.vue";
import MinaUppgifter from "@/components/MinaUppgifter.vue";
import SocialaMedier from "@/components/SocialaMedier.vue";
import MinaProjekt from "@/components/MinaProjekt.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
    MinaKunskaper,
    MinaUppgifter,
    SocialaMedier,
    MinaProjekt,
  },
  data() {
    return {
      backgroundText: "Carl Persson",
      menuStyling:
        "rounded-md min-h-full backdrop-blur-md flex items-end justify-start bg-white bg-opacity-5 text-white p-4 border border-gray-900 ",
      isIntroFinished: false,
      isEnteringMenu: false,
      isInSingleTask: false,

      textVisible: false,
      menuVisible: false,

      isSocialaMedierActive: false,
      isAboutMeActive: false,
      isMinaKunskaperActive: false,

      transitionClasses: "transition-opacity duration-1000 ease-in",
    };
  },
  mounted() {
    this.step1()
      .then(() => this.step2())
      .then(() => this.afterIntro());
  },
  methods: {
    step1() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.textVisible = true;
          resolve();
        }, 500);
      });
    },
    step2(timer = 1500) {
      setTimeout(() => {
        this.textVisible = false;
        this.menuVisible = true;
      }, timer);
    },
    afterIntro(timer = 2500) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.backgroundText = "";
          this.isIntroFinished = true;
          resolve();
        }, timer);
      });
    },
    enteringMenu() {
      this.isEnteringMenu = true;
      this.isAboutMeActive = false;
      this.isMinaKunskaperActive = false;
      this.isMinaUppgifterActive = false;
      this.isSocialaMedierActive = false;
      this.isMinaProjekt = false;
      this.menuVisible = true;
      this.textVisible = true;
      setTimeout(() => {
        this.backgroundText = "";
        this.isEnteringMenu = false;
      }, 500);
    },
    enteringOption(option) {
      this.menuVisible = false;
      this.textVisible = false;
      this.backgroundText = "";
      switch (option) {
        case "aboutMe":
          this.isAboutMeActive = true;
          break;
        case "minaKunskaper":
          this.isMinaKunskaperActive = true;
          break;
        case "minaUppgifter":
          this.isMinaUppgifterActive = true;
          break;

        case "kontakt":
          this.isSocialaMedierActive = true;
          break;
        case "projekt":
          this.isMinaProjekt = true;
          break;
      }
      this.isEnteringMenu = true;
      setTimeout(() => {
        this.backgroundText = "";
        this.isEnteringMenu = false;
      }, 500);
    },
    handleIsInSingleTask(newValue) {
      this.isInSingleTask = newValue;
    },
  },
};
</script>

<style scoped>
.main-menu > div:hover,
.main-menu > a:hover {
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
