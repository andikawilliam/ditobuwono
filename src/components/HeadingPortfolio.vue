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
          trigger: this.headerId,
          start: "top 30%",
          end: "bottom 20%",
          scrub: 1
          // markers: true
        },
        y: "150%",
        opacity: 0
      });
    }
  }
});
</script>

<style scoped>
.heading-text {
  font-size: 12vw;
}
</style>
