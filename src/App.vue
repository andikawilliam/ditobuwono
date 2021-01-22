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
@import url("https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Roboto+Slab:wght@100;200;300;400;500;600;700&display=swap");

/* @font-face {
  font-family: 'Roboto Slab';
  src:  url('./assets/fonts/Roboto Slab/Roboto-Slab.woff') format('woff'),
}
@font-face {
  font-family: Cormorant;
  src:  url('./assets/fonts/Cormorant/Cormorant-Bold.woff') format('woff'), 
}
@font-face {
  font-family: Cormorant;
  src: url('./assets/fonts/Cormorant/Cormorant-BoldItalic.woff') format('woff'), 
}
@font-face {
  font-family: Cormorant;
  src: url('./assets/fonts/Cormorant/Cormorant-Italic.woff') format('woff'), 
}
@font-face {
  font-family: Cormorant;
  src:  url('./assets/fonts/Cormorant/Cormorant-Light.woff') format('woff'), 
}
@font-face {
  font-family: Cormorant;
  src:  url('./assets/fonts/Cormorant/Cormorant-LightItalic.woff') format('woff'), 
}
@font-face {
  font-family: Cormorant;
  src:  url('./assets/fonts/Cormorant/Cormorant-Medium.woff') format('woff'), 
}
@font-face {
  font-family: Cormorant;
  src:  url('./assets/fonts/Cormorant/Cormorant-MediumItalic.woff') format('woff'), 
}
@font-face {
  font-family: Cormorant;
  src:  url('./assets/fonts/Cormorant/Cormorant-Regular.woff') format('woff'), 
} */

html {
  background: rgb(15, 15, 15);
}

body {
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgb(19, 19, 19) 20%,
    rgb(12, 12, 12) 100%
  );
}

#app {
  font-family: Cormorant, serif;
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
