<template>
  <div class="py-24 md:py-32 xl:py-24">
    <div id="home" class="flex justify-center">
      <div class="portfolios-main text-current font-semibold lg:font-medium">
        <p id="film" class="main-text" v-on:click="goTo('#filmography')">
          FILM.
        </p>
        <p id="music" class="main-text" v-on:click="goTo('#mixtapes')">
          MUSIC.
        </p>
        <p id="podcast" class="main-text" v-on:click="goTo('#talks')">
          PODCAST.
        </p>
        <p id="writing" class="main-text" v-on:click="goTo('#publications')">
          WRITING.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TimelineMax } from "gsap";
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
  mounted() {
    const tl = new TimelineMax({ defaults: { duration: 0.25, delay: 0.1 } });
    tl.to("#film", { autoAlpha: 1, x: "-10vw" });
    tl.to("#music", { autoAlpha: 1, x: "-10vw" });
    tl.to("#podcast", { autoAlpha: 1, x: "-10vw" });
    tl.to("#writing", { autoAlpha: 1, x: "-10vw" });
  },
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
  font-size: 9vw;
}
.portfolios-main p {
  transition: all 0.4s ease-in-out;
}
.main-text:hover {
  transform: translateX(1vw);
  opacity: 0.4;
}
.main-text {
  cursor: pointer;
  opacity: 0;
  visibility: "hidden";
  line-height: 1.25;
}

@media screen and (max-width: 960px) {
  .portfolios-main {
    font-size: 15vw;
    padding-left: 10vw;
  }
}
</style>
