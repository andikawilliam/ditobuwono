<template>
  <div id="app" v-cloak>
    <TheNav />
    <PageMain />
    <PageAbout id="about-section" />
    <PagePortfolioFilm id="page-film" />
    <PagePortfolioWriting id="page-writing" />
    <PagePortfolioMusic id="page-music" />
    <PagePortfolioPodcast id="page-podcast" />
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Playfair+Display:wght@400;500;600;700;800&family=Roboto+Slab:wght@100;200;300;400;500;600;700&display=swap');
/* @font-face {
  font-family: 'Roboto Slab';
  src:  url('./assets/fonts/Roboto Slab/Roboto-Slab.woff') format('woff'),
}
@font-face {
  font-family: Cormorant;
  src:  url('./assets/fonts/Cormorant/Cormorant-Bold.woff') format('woff'), 
}
*/

html {
  background: rgb(255, 255, 255);
}

body {
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgb(231, 231, 231) 20%,
    rgb(233, 233, 233) 100%
  );
}

#app {
  font-family: "Open Sans", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #262626;
}
[v-cloak] {
  display: none;
}
.grayscale {
  -webkit-filter: grayscale(35%);
  filter: grayscale(35%);
}
</style>
