<template>
  <div class="relative text-gray-ivory px-8 lg:px-20 py-40">
    <PortfolioDescription :description="description" :key="description" />
    <PortfolioHeading :portfolio="title" :key="title" />
    <!-- <div id="switch-work" class="absolute w-full flex justify-between items-center px-20">
      <font-awesome-icon
        :icon="['fas', 'chevron-left']"
        size="2x"
        class="cursor-pointer hover:opacity-75"
        v-on:click="switchFilm(-1)"
      />
      <font-awesome-icon
        :icon="['fas', 'chevron-right']"
        size="2x"
        class="cursor-pointer hover:opacity-75"
        v-on:click="switchFilm(1)"
      />
    </div> -->
    <div class="relative">
      <!-- <keep-alive>
        <transition-group v-bind:name="slider">
          <FilmWork
            :key="films[activeFilm].id"
            v-bind:title="films[activeFilm].title"
            v-bind:type="films[activeFilm].type"
            v-bind:role="films[activeFilm].role"
            v-bind:accolades="films[activeFilm].accolades"
            v-bind:embed="films[activeFilm].embed"
          />
        </transition-group>
      </keep-alive> -->
      <FilmWork
        v-for="film in films"
        :key="film.id"
        v-bind:title="film.title"
        v-bind:type="film.type"
        v-bind:role="film.role"
        v-bind:accolades="film.accolades"
        v-bind:embed="film.embed"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PortfolioHeading from "../components/PortfolioHeading.vue";
import PortfolioDescription from "../components/PortfolioDescription.vue";
import FilmWork from "../components/FilmWork.vue";
// import CoverTerbelenggu from "../assets/ss-terbelenggu.png";
// import CoverMenyusulmu from "../assets/ss-menyusulmu.png";
// import CoverBelrusak from "../assets/ss-belrusak.png";

export default Vue.extend({
  name: "PortfolioFilm",
  components: {
    PortfolioHeading,
    PortfolioDescription,
    FilmWork
  },
  data: function() {
    return {
      description: `
        Dito's passion for cinema has existed since early childhood influenced  
        by his father. He started by making short films with his friends when 
        he was in high school. 
        <span class="font-semibold"> Terbelenggu (2014) </span>
        and 
        <span class="font-semibold"> Menyusulmu Bisa Menunggu (2015) </span>
        are short films that he has starred in. In 2020, Belrusak will be 
        Dito's directorial debut in the form of a short documentary.
      `,
      title: "FILMOGRAPHY",
      activeFilm: 0,
      slider: "slide-left",
      films: [
        {
          id: 1,
          // image: CoverBelrusak,
          title: "Belrusak (2020)",
          type: "Short Documentary Film",
          role: "Role: Director",
          accolades: [
            "Official Selection Viddsee Juree Awards 2020",
            "Official Selection Lift-Off Global Network Lift-Off Sessions 2020",
            "Official Selection Lift-Off Global Network First-Time Filmmaker Sessions 2020"
          ],
          embed: "https://www.viddsee.com/player/ywxkh"
        },
        {
          id: 2,
          // image: CoverMenyusulmu,
          title: "Menyusulmu Bisa Menunggu (2015)",
          type: "Short Fiction Film",
          role: "Roles: Actor, Producer",
          accolades: ["Winner Global Jaya Film Festival"],
          embed: "https://www.youtube-nocookie.com/embed/BMIpvCrxou4"
        },
        {
          id: 3,
          // image: CoverTerbelenggu,
          title: "Terbelenggu (2014)",
          type: "Short Fiction Film",
          role: "Roles: Actor, Music Director",
          accolades: ["Winner 8Schoolastic SMAN 8 Jakarta Film Festival"],
          embed: "https://www.youtube-nocookie.com/embed/_Q2Xg5CHHf8"
        }
      ]
    };
  },
  methods: {
    switchFilm(slide: number) {
      if (slide === -1) {
        this.slider = "slide-left";
      } else {
        this.slider = "slide-right";
      }
      this.activeFilm = this.loopFilm(slide);
    },
    loopFilm(slide: number): number {
      let filmIndex: number = this.activeFilm + slide;
      if (filmIndex > this.films.length - 1) {
        filmIndex = 0;
      }
      if (filmIndex < 0) {
        filmIndex = 2;
      }
      return filmIndex;
    }
  }
});
</script>

<style scoped>
.video-slider {
  overflow: hidden;
  position: relative;
}

#switch-work {
  top: 50%;
  transform: translateY(-50%);
}

.slide-left-leave-active,
.slide-left-enter-active {
  transition: all 1s ease-in-out;
}
.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-left-leave-active {
  position: absolute;
}

.slide-right-leave-active,
.slide-right-enter-active {
  transition: all 1.2s ease-in-out;
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.slide-right-leave-active {
  position: absolute;
}
</style>
