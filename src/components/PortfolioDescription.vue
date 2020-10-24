<template>
  <div class="h-screen flex items-center justify-center lg:w-2/3 lg:mx-auto">
    <h3
      class="description-text pl-4 font-thin italic tracking-wide"
      v-html="description"
    ></h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PortfolioDescription",
  props: ["description"]
  // data() {
  //   return {
  //     headerId: "#" + this.portfolio
  //   };
  // },
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
  //       rotation: 0.01,
  //       onComplete: () => ScrollTrigger.refresh()
  //     });
  //   }
  // }
});
</script>

<style scoped>
.description-text {
  font-size: 2vw;
  border-left: 4px solid;
}

@media screen and (max-width: 1204px) {
  .description-text {
    font-size: 5.5vw;
    border-left: 2px solid;
  }
}
</style>
