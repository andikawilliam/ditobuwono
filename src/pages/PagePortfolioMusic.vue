<template>
  <div class="relative text-gray-ivory px-8 lg:px-20 py-40">
    <PortfolioHeading :title="title" :description="description" />
    <div class="relative lg:w-2/3 mx-auto">
      <div class="w-full music-grid-container">
        <div
          class="row-span-1 col-span-5 grayscale"
          v-for="mixtape in mixtapes"
          :key="mixtape.id"
          v-bind:class="gridSpan(mixtape.rowGrid, mixtape.colGrid)"
        >
          <transition name="mixtape-fade">
            <div
              v-show="!mixtape.show"
              class="mixtape-text border-gray-dito-text"
              v-on:click="mixtape.show = true"
            >
              {{ mixtape.name }}
            </div>
          </transition>
          <transition appear>
            <iframe
              v-if="mixtape.show"
              :src="mixtape.src"
              loading="lazy"
              width="100%"
              height="100%"
              scrolling="no"
              frameborder="0"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PortfolioHeading from "../components/PortfolioHeading.vue";

export default Vue.extend({
  name: "PortfolioMusic",
  components: {
    PortfolioHeading
  },
  data: function() {
    return {
      title: "mixtapes",
      description: `
        Being a  
        <span class="font-semibold">part-time DJ</span>, 
        from 2019 Dito always offers various perspectives. Dito has performed
        several times with his 
        <span class="font-semibold">collective</span> 
        and as a 
        <span class="font-semibold">solo.</span> 
        <br><br>
        Currently, Dito likes to explore and experiment from various music 
        genres through his mixtape choices.
      `,
      mixtapes: [
        {
          id: 1,
          show: false,
          rowGrid: 3,
          colGrid: 2,
          name: "Suddenly Kaget Mixtape: Masa, Masa",
          src:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/769393264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        },
        {
          id: 2,
          show: false,
          rowGrid: 3,
          colGrid: 3,
          name: "SUBLIMINAL MESSAGES: SWABTEST#1",
          src: "https://www.youtube.com/embed/pvJEInkcfxI"
        },
        {
          id: 3,
          show: false,
          rowGrid: 1,
          colGrid: 5,
          name: "Suddenly Kaget Mixtape: Maharddhika",
          src:
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FSuddenlyKaget%2Fsuddenlykaget-mixtape-maharddhika%2F"
        },
        {
          id: 4,
          show: false,
          rowGrid: 1,
          colGrid: 5,
          name: "Infidelity in Suburbia",
          src: "https://www.mixcloud.com/widget/iframe/?feed=%2Fbuvv%2F"
        }
      ]
    };
  },
  methods: {
    gridSpan: function(rowSize: number, columnSize: number) {
      const row: string = "lg:row-span-" + rowSize;
      const col: string = "lg:col-span-" + columnSize;
      return row + " " + col;
    }
  }
});
</script>

<style scoped>
.music-grid-container {
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-template-rows: repeat(5, 150px);
  grid-auto-flow: row;
  gap: 1rem;
}

.mixtape-text {
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5em 1em;
  text-align: center;
  font-size: 2.4vw;
  font-family: Rubik;
  font-style: italic;
  font-weight: 500;
  border-radius: 0.1em;
  border-width: 4px;
}

.mixtape-text:hover {
  color: #0f0f0f;
  background-color: #f7f7f2;
}

@media screen and (max-width: 1204px) {
  .mixtape-text {
    font-weight: 700;
    font-size: 6vw;
  }
  .music-grid-container {
    grid-template-rows: repeat(4, 150px);
  }
}

.mixtape-fade-enter-active,
.mixtape-fade-leave-active {
  position: absolute;
}
.mixtape-fade-enter,
.mixtape-fade-leave-to {
  opacity: 0;
}
</style>
