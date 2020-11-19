<template>
  <div id="app" v-cloak>
    <TheNav />
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
    PageMain,
    PageAbout,
    PagePortfolioFilm,
    PagePortfolioMusic,
    PagePortfolioPodcast,
    PagePortfolioWriting,
    PageContact
  },
  mounted: function() {
    this.mainScroll();
  },
  methods: {
    mainScroll() {
      gsap.fromTo(
        "#app",
        {
          backgroundColor: "#eee",
          color: "#0f0f0f"
        },
        {
          scrollTrigger: {
            trigger: "#page-film",
            start: "top 80%",
            end: "top 80%",
            toggleActions: "play none none none"
          },
          backgroundColor: "#0f0f0f",
          color: "#eee",
          ease: "power4",
          duration: 0.4
        }
      );
    }
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
#app {
  font-family: "Ubuntu", sans-serif;
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
