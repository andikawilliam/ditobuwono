<template>
  <div id="home" class="py-24 md:py-32 xl:py-24">
    <div class="flex pl-6 md:pl-16">
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
        <font-awesome-icon
          class="text-xl lg:text-3xl down-notice animate-bounce"
          :icon="['fas', 'chevron-down']"
        />
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
    tl.to("#ditotext", { filter: "blur(0px)", autoAlpha: 1, duration: 1 });
    tl.to("#ditotext", { x: 0, y: 0, scale: 1, duration: 0.5, delay: 0.5 });

    tl.to("#film", { autoAlpha: 1, x: 0, duration: 0.2 });
    tl.to("#music", { autoAlpha: 1, x: 0, duration: 0.2 });
    tl.to("#podcast", { autoAlpha: 1, x: 0, duration: 0.2 });
    tl.to("#writing", { autoAlpha: 1, x: 0, duration: 0.2 });

    tl.to(".down-notice", { autoAlpha: 1, y: 10, duration: 0.5, delay: 0.5 });
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

.down-notice {
  position: absolute;
  opacity: 0;
  left: 50%;
  margin-top: 5%;
}

@media screen and (max-width: 960px) {
  .portfolios-main {
    font-size: 12vw;
  }
  .main-text {
    line-height: 1.8;
  }
  .down-notice {
    margin-top: 15%;
  }
}
</style>
