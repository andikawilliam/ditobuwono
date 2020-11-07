<template>
  <header
    class="fixed w-full px-6 lg:px-16 py-8 lg:py-12 z-20"
    v-bind:class="[isMain ? '' : 'header-portfolio']"
  >
    <div
      class="flex justify-between font-medium"
      v-bind:class="[isMain ? 'text-black-onyx' : 'text-gray-ivory']"
    >
      <div>
        <h1 class="flex lg:text-2xl cursor-pointer" v-on:click="goTo('#home')">
          <div class="font-bold">DITO</div>
          <div class="font-light">BUWONO</div>
        </h1>
      </div>
      <div>
        <a href="https://www.instagram.com/ditobuwono/">
          <font-awesome-icon
            class="mx-2 lg:text-3xl"
            :icon="['fab', 'instagram']"
          />
        </a>
        <a href="https://www.linkedin.com/in/hanindito-buwono-98437a179/">
          <font-awesome-icon
            class="ml-1 lg:ml-2 lg:text-3xl"
            :icon="['fab', 'linkedin']"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default Vue.extend({
  name: "TheNav",
  props: ["isMain"],
  methods: {
    goTo: function(destination: string) {
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: destination,
          offsetY: 150
        },
        ease: "power2"
      });
    }
  }
});
</script>

<style scoped>
header {
  transition: background-color 0.5s ease-in-out;
}

.header-portfolio {
  background: rgb(15, 15, 15);
  background: linear-gradient(
    180deg,
    rgba(15, 15, 15, 1) 0%,
    rgba(15, 15, 15, 0.7021183473389356) 69%,
    rgba(15, 15, 15, 0) 100%
  );
}
</style>
