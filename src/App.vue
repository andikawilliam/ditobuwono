<template>
  <div id="app" v-cloak>
    <TheNav />
    <PageMain />
    <PageAbout id="about-section" />
    <PagePortfolioFilm id="page-film" />
    <PagePortfolioMusic id="page-music" />
    <PagePortfolioPodcast id="page-podcast" />
    <PagePortfolioWriting id="page-writing" />
    <PageContact />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
html {
  background: rgb(15, 15, 15);
}

body {
  background: rgb(15, 15, 15);
  background: linear-gradient(
    90deg,
    rgba(0, 10, 18, 1) 0%,
    rgb(24, 33, 37) 100%
  );
}

#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #eee;
}
[v-cloak] {
  display: none;
}
.grayscale {
  -webkit-filter: grayscale(40%);
  filter: grayscale(40%);
}
</style>
