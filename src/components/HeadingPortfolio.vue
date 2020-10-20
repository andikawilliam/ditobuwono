<template>
  <h1
    :id="portfolio"
    class="heading-text text-center font-medium pb-6 lg:pb-12"
  >
    {{ portfolio }}
  </h1>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "Heading",
  props: ["portfolio"],
  data() {
    return {
      headerId: "#" + this.portfolio
    };
  },
  mounted: function() {
    this.headerTranslate();
  },
  methods: {
    headerTranslate() {
      gsap.to(this.headerId, {
        scrollTrigger: {
          id: this.headerId,
          trigger: this.headerId,
          start: "top 40%",
          end: "bottom 10%",
          scrub: 0.5
        },
        y: "25vw",
        autoAlpha: 0,
        rotation: 0.01
      });
    }
  }
});
</script>

<style scoped>
.heading-text {
  font-size: 8vw;
}
</style>
