<template>
  <div class="pb-24 lg:pb-32">
    <div class="flex justify-center">
      <div
        class="portfolios-main text-black-onyx font-semibold lg:font-medium lg:leading-snug"
      >
        <p class="cursor-pointer" v-on:click="goTo('#filmography')">
          FILM.
        </p>
        <p class="cursor-pointer" v-on:click="goTo('#mixtapes')">
          MUSIC.
        </p>
        <p class="cursor-pointer" v-on:click="goTo('#talks')">
          PODCAST.
        </p>
        <p class="cursor-pointer" v-on:click="goTo('#publications')">
          WRITING.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default Vue.extend({
  name: "PageMain",
  methods: {
    goTo: function(destination: string) {
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: destination,
          offsetY: 50
        },
        ease: "power2"
      });
    }
  }
});
</script>

<style scoped>
.portfolios-main {
  font-size: 15vw;
}

.portfolios-main p {
  transition: all 0.4s ease-in-out;
}

.portfolios-main p:hover {
  transform: translateX(2vw);
  opacity: 0.4;
}
</style>
