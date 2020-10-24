<template>
  <div id="app">
    <TheNav />
    <PageMain />
    <PageAbout class="about-section" />
    <PagePortfolioFilm />
    <PagePortfolioMusic />
    <PagePortfolioPodcast />
    <PagePortfolioWriting />
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
          backgroundColor: "#F7F7F2"
        },
        {
          scrollTrigger: {
            trigger: ".about-section",
            start: "80% 60%",
            end: "80% 60%",
            toggleActions: "play none reverse reverse",
          },
          backgroundColor: "#0f0f0f"
        }
      );
    }
  }
});
</script>

<style>
#app {
  font-family: Ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.grayscale {
  -webkit-filter: grayscale(40%);
  filter: grayscale(40%);
}
</style>
