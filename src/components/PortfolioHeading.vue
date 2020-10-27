<template>
  <div id="">
    <PortfolioTitle :title="title" :titleId="titleId" />
    <div class="mb-20 lg:mb-32 lg:w-3/4 lg:mx-auto">
      <PortfolioLine :lineId="lineId" />
      <PortfolioDescription
        :description="description"
        :descriptionId="descriptionId"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import PortfolioTitle from "../components/PortfolioTitle.vue";
import PortfolioLine from "../components/PortfolioLine.vue";
import PortfolioDescription from "../components/PortfolioDescription.vue";

gsap.registerPlugin(ScrollTrigger);
export default Vue.extend({
  name: "PortfolioHeading",
  props: ["title", "description"],
  components: {
    PortfolioTitle,
    PortfolioLine,
    PortfolioDescription
  },
  data() {
    return {
      titleId: this.title,
      lineId: "line-" + this.title,
      descriptionId: "desc-" + this.title
    };
  },
  mounted: function() {
    this.headerAnimation();
  },
  methods: {
    headerAnimation() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#" + this.titleId,
          start: "bottom 35%",
          end: "bottom 35%",
          // markers: true,
          toggleActions: "play none none none"
        }
      });
      tl.fromTo(
        "#" + this.titleId,
        { y: "-10vw", autoAlpha: 0 },
        { y: 0, autoAlpha: 1, rotation: 0.01, ease: "power2" }
      );
      tl.fromTo(
        "#" + this.lineId,
        { scaleX: 0.1 },
        { scaleX: 1, ease: "power2" }
      );
      tl.fromTo(
        "#" + this.descriptionId,
        { autoAlpha: 0, y: "-2vw" },
        { autoAlpha: 1, y: 0, ease: "power2" }
      );
    }
  }
});
</script>

<style scoped></style>
