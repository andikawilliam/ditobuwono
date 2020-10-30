<template>
  <div class="flex items-center px-8 lg:px-24 lg:py-40">
    <div class="lg:w-3/4 mx-auto">
      <hr class="about-line mx-auto my-8 lg:my-12" />
      <div class="about-text font-light text-black-onyx">
        <p>
          In the course of his creative process, Dito always raises the theme of
          <span class="font-medium">the meaning of honesty</span>
          from a sense of loss, where according to him that feeling is a
          <span class="font-medium">depiction of a complete human figure.</span>
        </p>
        <p class="pt-6">
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

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PageAbout",
  data() {
    return {
      title: "DITOBUWONO"
    };
  }
  // mounted: function() {
  //   this.aboutScroll();
  // },
  // methods: {
  //   aboutScroll() {
  //     gsap.fromTo(
  //       ".about-text",
  //       { autoAlpha: 0, y:30 },
  //       {
  //         scrollTrigger: {
  //           id: "about-text",
  //           trigger: ".about-text",
  //           start: "top 65%",
  //           end: "20% 30%",
  //           scrub: true
  //         },
  //         y: 0,
  //         z: 10,
  //         autoAlpha: 1,
  //         rotation: 0.01
  //       }
  //     );
  //   }
  // }
});
</script>

<style scoped>
.about-line {
  width: 100%;
  transform: scaleX(0.15);
  border-top: 10px solid #0f0f0f;
}

.about-text {
  font-size: 2.1vw;
  letter-spacing: 0.03em;
  line-height: 1.8em;
}
@media screen and (max-width: 1204px) {
  .about-text {
    font-size: 4.7vw;
    letter-spacing: 0.015em;
    line-height: 1.48em;
  }
  .about-line {
    border-top: 4px solid #0f0f0f;
  }
}
</style>
