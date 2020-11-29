<template>
  <div id="home" class="py-24 md:py-32 xl:py-24">
    <div class="flex pl-6 lg:pl-16">
      <div class="portfolios-main text-current font-semibold lg:font-medium">
        <p id="film" class="main-text" v-on:click="goTo('#filmography')">
          FILMMAKER.
        </p>
        <p id="music" class="main-text" v-on:click="goTo('#mixtapes')">
          DISCJOCKEY.
        </p>
        <p id="podcast" class="main-text" v-on:click="goTo('#talks')">
          PODCASTER.
        </p>
        <p id="writing" class="main-text" v-on:click="goTo('#publications')">
          WRITER.
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
    const tl = new TimelineMax();
    tl.to("#ditotext", { x: "20vw", autoAlpha: 1, duration: 2, delay: 0.08 });
    tl.to("#ditotext", { x: 0, y: 0, scale: 1, duration: 0.5 });

    tl.to("#film", { autoAlpha: 1, x: 0, duration: 0.2, delay: 0.05 });
    tl.to("#music", { autoAlpha: 1, x: 0, duration: 0.2, delay: 0.05 });
    tl.to("#podcast", { autoAlpha: 1, x: 0, duration: 0.2, delay: 0.05 });
    tl.to("#writing", { autoAlpha: 1, x: 0, duration: 0.2, delay: 0.05 });
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
  font-size: 8vw;
}
.portfolios-main p {
  transition: all 0.4s ease-in-out;
}

.main-text {
  cursor: pointer;
  opacity: 0;
  visibility: "hidden";
  line-height: 1.25;
  transform: translateX(6vw);
}

@media screen and (max-width: 960px) {
  .portfolios-main {
    font-size: 12vw;
  }
  .main-text {
    line-height: 1.6;
  }
}
</style>
