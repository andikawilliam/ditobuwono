<template>
  <div class="flex items-center px-8 lg:px-24 lg:py-40">
    <div class="lg:w-2/3 text-black-onyx mx-auto">
      <HeadingPortfolio portfolio="About" />
      <div class="about-text font-light main opacity-0">
        <p>
          In the course of his creative process, Dito always raises the theme of
          <span class="font-medium">the meaning of honesty</span>
          from a sense of loss, where according to him that feeling is a
          <span class="font-medium">depiction of a complete human figure.</span>
        </p>
        <p class="pt-4">
          This idea developed into one of Dito's quest goals to
          <span class="font-medium">explore different perspectives</span>
          from different mediums, which later could describe and preserve
          <span class="font-medium">the meaning of human beings.</span>
        </p>
        <p class="pt-8">
          Currently, Dito is completing his undergraduate thesis at the Faculty
          of Psychology, Gadjah Mada University.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeadingPortfolio from "../components/HeadingPortfolio.vue";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PageMain",
  components: { HeadingPortfolio },
  mounted: function() {
    this.mainScroll();
  },
  methods: {
    mainScroll() {
      gsap.to(".main", {
        scrollTrigger: {
          trigger: ".main",
          start: " 60%",
          end: "center 40%",
          scrub: 1
          // markers: true
        },
        opacity: 1,
        y: -20
      });
    }
  }
});
</script>

<style scoped>
.about-text {
  font-size: 2.4vw;
}
@media screen and (max-width: 1204px) {
  .about-text {
    font-size: 5.5vw;
  }
}
</style>
