<template>
  <div id="app" v-cloak>
    <PageLoading />
    <TheNav :isMain="isMain" />
    <PageMain />
    <PageAbout class="about-section" />
    <PagePortfolioFilm id="page-film" />
    <PagePortfolioMusic id="page-music" />
    <PagePortfolioPodcast id="page-podcast" />
    <PagePortfolioWriting id="page-writing" />
    <PageContact />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import TheNav from "./components/TheNav.vue";
import PageLoading from "./pages/PageLoading.vue";
import PageMain from "./pages/PageMain.vue";
import PageAbout from "./pages/PageAbout.vue";
import PagePortfolioFilm from "./pages/PagePortfolioFilm.vue";
import PagePortfolioMusic from "./pages/PagePortfolioMusic.vue";
import PagePortfolioPodcast from "./pages/PagePortfolioPodcast.vue";
import PagePortfolioWriting from "./pages/PagePortfolioWriting.vue";
import PageContact from "./pages/PageContact.vue";

export default Vue.extend({
  name: "App",
  components: {
    TheNav,
    PageLoading,
    PageMain,
    PageAbout,
    PagePortfolioFilm,
    PagePortfolioMusic,
    PagePortfolioPodcast,
    PagePortfolioWriting,
    PageContact
  },
  data: function() {
    return {
      isMain: true
    };
  },
  mounted: function() {
    this.mainScroll(), this.changeSection();
  },
  methods: {
    mainScroll() {
      gsap.fromTo(
        "#app",
        {
          backgroundColor: "#F7F7F2"
        },
        {
          scrollTrigger: {
            trigger: ".about-section",
            start: "80% 60%",
            end: "80% 60%",
            toggleActions: "play none reverse reverse"
          },
          backgroundColor: "#0f0f0f",
          duration: 0.5
        }
      );
    },
    changeSection() {
      ScrollTrigger.create({
        trigger: ".about-section",
        start: "80% 60%",
        end: "80% 60%",
        toggleActions: "play none reverse reverse",
        onEnter: () => this.changeIsMain(false),
        onLeaveBack: () => this.changeIsMain(true)
      });
    },
    changeIsMain(state: boolean): void {
      this.isMain = state;
      console.log(this.isMain);
    }
  }
});
</script>

<style>
#app {
  font-family: Ubuntu, Rubik, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
[v-cloak] {
  display: none;
}
.grayscale {
  -webkit-filter: grayscale(40%);
  filter: grayscale(40%);
}
</style>
