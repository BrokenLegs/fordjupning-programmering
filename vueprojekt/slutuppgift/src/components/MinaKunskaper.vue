<template>
  <div
    class="grid grid-cols-1 p-10 md:grid-cols-12 gap-3 absolute top-0 md:relative"
  >
    <div
      class="soft-skill col-span-full mb-10 md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-3"
    >
      <h3 class="col-span-full text-3xl md:relative md:bottom-5 mb-5 md:mb-0">
        Soft skills
      </h3>
      <p v-for="softSkill in softSkills" :key="softSkill" class="">
        {{ softSkill }}
      </p>
    </div>
    <div
      class="erfarenhet col-span-full mb-10 md:col-span-4 grid gap-3 md:border-l md:border-r"
    >
      <h3 class="text-3xl md:relative md:bottom-5 mb-5 md:mb-0">Erfarenhet</h3>
      <p v-for="erfarenhet in erfarenhet" :key="erfarenhet">
        {{ erfarenhet }}
      </p>
    </div>
    <div
      class="hard-skill col-span-full md:col-start-9 md:col-span-4 px-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3"
    >
      <h3 class="col-span-full text-3xl md:relative md:bottom-5 mb-5 md:mb-0">
        Hard skills
      </h3>
      <div
        v-for="hardSkill in hardSkills"
        :key="hardSkill"
        class="justify-center items-center flex flex-col"
      >
        <img
          :src="
            require(`@/assets/logos/${hardSkill
              .toLowerCase()
              .replace('#', 'sharp')}.svg`)
          "
          :alt="hardSkill"
          class="h-20 bg-cyan-50 bg-opacity-50 rounded-md"
        />
        <p class="text-xs">{{ hardSkill }}</p>
      </div>
      <div
        class="grid justify-center items-center bg-cyan-50 bg-opacity-50 rounded-md h-20"
      >
        ASP .NET MVC
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MinaKunskaper",
  data() {
    return {
      erfarenhet: [
        "Avancerad Programmering, 4 veckor",
        "Utvecklare (utöver 2st LIA-Perioder), ca 1 år",
        "KYH - Agile web developer, 2.2 år",
        "Montör->Arbetsledare->Projektledare i Byggbranschen(Byggställning) ca 15 år",
        "Kampsportsinstruktör WingTsun, 12 år",
        "Kampsportsinstruktör Weapons Combat, 5 år",
      ],
      softSkills: [
        "Driven",
        "Ansvarstagande",
        "Social",
        "Problemlösare",
        "Nyfiken",
        "Vilja att lära",
        "Flexibel",
        "Ledarskap",
        "Öga för detaljer",
        "Strukturerad",
        "Älskar utmaningar",
        "Prestigelös",
        "Ärlig",
        "Lojal",
        "Lagspelare",
        "Stresstålig",
        "Verbal och skriven kommunikation",
        "Öppensinnad",
      ],
      //Im gonna update "hardSkills" to a list of objects instead and add the property imgPath instead.
      hardSkills: [
        "Html",
        "Css",
        "Tailwind",
        "React",
        "Next.js",
        "Vue",
        "Node",
        "Git",
        "PHP",
        "Javascript",
        "MySQL",
        "Laravel",
        "JQuery",
        "Git-Bash",
        "Scrum",
        "C#",
        // "MVC",
      ],
    };
  },
};
</script>

<style scoped></style>
