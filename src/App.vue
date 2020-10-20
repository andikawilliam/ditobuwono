<template>
  <div id="app" class="bg-gray-ivory">
    <TheNav />
    <PageMain />
    <PageAbout class="about-section" />
    <PagePortfolioFilm />
    <PagePortfolioMusic />
    <PagePortfolioPodcast />
    <PagePortfolioWriting />
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

export default Vue.extend({
  name: "App",
  components: {
    TheNav,
    PageMain,
    PageAbout,
    PagePortfolioFilm,
    PagePortfolioMusic,
    PagePortfolioPodcast,
    PagePortfolioWriting
  },
  mounted: function() {
    this.mainScroll();
  },
  methods: {
    mainScroll() {
      gsap.to("#app", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "80% center",
          end: "bottom 40%",
          scrub: 1
        },
        "background-color": "#0f0f0f"
      });
    }
  }
});
</script>

<style>
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.grayscale {
  -webkit-filter: grayscale(30%);
  filter: grayscale(30%);
}
</style>
