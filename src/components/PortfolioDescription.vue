<template>
  <div class="flex items-center justify-center mb-12 lg:mb-24 lg:w-3/4  lg:mx-auto">
    <div class="border-container">
      <h3
        v-bind:id="'desc-' + portfolio"
        class="description-text pt-2 lg:pt-8 font-light italic tracking-wide"
        v-html="description"
      ></h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PortfolioDescription",
  props: ["portfolio", "description"],
  data() {
    return {
      descriptionId: "#desc-" + this.portfolio
    };
  },
  mounted: function() {
    this.descriptionTranslate();
  },
  methods: {
    descriptionTranslate() {
      gsap.fromTo(
        this.descriptionId,
        { opacity: 0, y: "-2vw" },
        {
          scrollTrigger: {
            trigger: this.descriptionId,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0
        }
      );
    }
  }
});
</script>

<style scoped>
.description-text {
  position: relative;
  font-size: 1.8vw;
}

.border-container {
  left: 0px;
  top: 0%;
  border-top: 8px solid;
  transition: transform 250ms ease-in-out;
}

@media screen and (max-width: 1204px) {
  .description-text {
    font-size: 3.6vw;
  }
  .border-container {
    border-top: 3px solid;
  }
}
</style>
