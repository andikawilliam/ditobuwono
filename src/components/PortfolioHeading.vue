<template>
  <h1 :id="portfolio" class="heading-text text-center font-medium pb-2 lg:pb-4">
    {{ portfolio }}
  </h1>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PortfolioHeading",
  props: ["portfolio"],
  data() {
    return {
      headerId: "#" + this.portfolio
    };
  },
  // mounted: function() {
  //   this.headerTranslate();
  // },
  // methods: {
  //   headerTranslate() {
  //     gsap.to(this.headerId, {
  //       scrollTrigger: {
  //         trigger: this.headerId,
  //         start: "top 40%",
  //         end: "bottom 10%",
  //         // markers: true,
  //         scrub: 0.5
  //       },
  //       y: "25vw",
  //       autoAlpha: 0,
  //       // rotation: 0.01,
  //       onComplete: () => ScrollTrigger.refresh()
  //     });
  //   }
  // }
});
</script>

<style scoped>
.heading-text {
  font-size: 10vw;
}

@media screen and (max-width: 1204px) {
  .heading-text {
    font-size: 12vw;
  }
}
</style>
