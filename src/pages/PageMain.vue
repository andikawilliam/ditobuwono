<template>
  <div class="py-24 lg:py-24">
    <div id="home" class="flex justify-center">
      <div
        class="portfolios-main text-current font-semibold lg:font-medium lg:leading-snug"
      >
        <p class="main-text" v-on:click="goTo('#filmography')">
          FILM.
        </p>
        <p class="main-text" v-on:click="goTo('#mixtapes')">
          MUSIC.
        </p>
        <p class="main-text" v-on:click="goTo('#talks')">
          PODCAST.
        </p>
        <p class="main-text" v-on:click="goTo('#publications')">
          WRITING.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let offsetScroll = 220;
const isMobile = window.matchMedia("only screen and (max-width: 760px)")
  .matches;
if (isMobile) {
  offsetScroll = 150;
}

export default Vue.extend({
  name: "PageMain",
  methods: {
    goTo: function(destination: string) {
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: destination,
          offsetY: offsetScroll
        },
        ease: "power2"
      });
    }
  }
});
</script>

<style scoped>
.portfolios-main {
  font-size: 14vw;
}
.portfolios-main p {
  transition: all 0.4s ease-in-out;
}
.portfolios-main p:hover {
  transform: translateX(2vw);
  opacity: 0.4;
}
.main-text {
  cursor: pointer;
}

@media screen and (max-width: 1204px) {
  .portfolios-main {
    font-size: 15.5vw;
  }
}
</style>
