<template>
  <div
    v-if="allTasksVisible && !singleTaskVisible"
    class="grid grid-cols-2 md:grid-cols-4 gap-7 px-10"
  >
    <h3 class="md:col-span-5 text-3xl">Uppgifter under kursens gång</h3>
    <div
      v-for="uppgift in uppgifter"
      class="uppgift-container flex justify-center items-center cursor-pointer"
      :key="uppgift.id"
      @click="
        (singleUppgift = uppgift.id - 1),
          (allTasksVisible = false),
          enteringSingleTask(true)
      "
    >
      <p class="basis-full">
        <img
          :src="require(`@/assets/img/${uppgift.imgFolder}/1.png`)"
          :alt="uppgift.titel"
          class="rounded-md w-full h-auto"
        />
        {{ uppgift.titel }}
      </p>
    </div>
  </div>
  <div
    v-if="singleTaskVisible && !allTasksVisible"
    class="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 justify-center items-center absolute top-0 left-0 right-0 bottom-0"
  >
    <a
      class="fixed top-10 left-10 text-3xl cursor-pointer"
      @click="(allTasksVisible = true), enteringSingleTask(false)"
      >Tillbaka
    </a>
    <h3 class="col-span-full text-3xl">{{ uppgifter[singleUppgift].titel }}</h3>
    <p>{{ uppgifter[singleUppgift].description }}</p>
    <img
      v-for="i in uppgifter[singleUppgift].nrOfImages"
      class=""
      :src="
        require(`@/assets/img/${uppgifter[singleUppgift].imgFolder}/${i}.png`)
      "
      alt=""
      :key="i"
    />
  </div>
</template>
<script>
export default {
  name: "MinaUppgifter",
  data() {
    return {
      allTasksVisible: true,
      singleTaskVisible: false,
      singleUppgift: null,
      uppgifter: [
        {
          id: 1,
          nrOfImages: 6,
          imgFolder: "books-mvc-projects",
          titel: "Books Mvc",
          description:
            "Till en början lärde vi oss att skapa en mvc applikation i Visual studio. Vi började med att använda oss av MongoDB då det är lättare att komma in i till skillnad från MySQL. Skapade models, views och controllers där vi skulle skapa en grundläggande CRUD applikation för böcker. Nästa del var att sätta upp det med MySql. Vi satte upp alla databas-connections manuellt för att lära oss hur man gör. Även alla crud funktioner gjorde vi manuellt. Efter det lärde vi oss att sätta upp ett API som vi i slutändan kopplade ihop med en front-end skapad i Vue. Under tiden vi lärde oss Mvc delen så lärde vi oss även om relationer i MySql där vi skulle koppla ihop böcker och låntagare genom en 'loan' tabell. I sista lektionen lärde vi oss nyttja ASP.NET Core för att kunna göra allt väsentligt mycket snabbare än vad vi gjort innan då man inte behöver göra allt manuellt längre. I stort sett det enda manuella man behöver göra efter att man satt upp sin modell är att säkerställa att databasen skapats med Database.EnsureCreated() och ställa in sin connectionstring för att få ett fungerande API",
        },

        {
          id: 4,
          nrOfImages: 3,
          imgFolder: "todo-vue-api",
          titel: "Todo Vue Web Api",
          description:
            "Här har vi en Todo-app där front-end är byggd i vue, back-end i c# och Databasen i MySql",
        },
        {
          id: 2,
          nrOfImages: 6,
          imgFolder: "recept-mvc",
          titel: "Recept Mvc",
          description:
            "Här skulle vi skapa en mvc applikation för recept. Crud funktionalitet för recept och ingredienser mm. La inte särkslit mycket tid på design då det inte var fokus i uppgiften. Att hitta på recept är inte min starka sida så det var nästan lika svårt som att skapa själva applikationen. Databasen är i MySql",
        },
        {
          id: 3,
          nrOfImages: 3,
          imgFolder: "web-shop",
          titel: "Webshop Vue training",
          description:
            "Här skulle vi nyttja det vi lärt oss i Vue genom att bygga en webshop, göra produkterna klickbara så ett formulär visas där man kan fylla i kortuppgifter. Gjorde detta genom att skapa en lista av 'produkter' som jag sedan loopade över för att 'kort' med bild(placeholder), pris, titel",
        },
      ],
    };
  },
  methods: {
    enteringSingleTask(newValue) {
      this.singleTaskVisible = newValue;
      this.$emit("value-changed", newValue);
    },
  },
};
</script>
