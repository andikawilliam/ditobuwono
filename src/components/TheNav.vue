<template>
  <header
    id="header"
    class="fixed w-full px-6 md:px-12 lg:px-16 py-4 md:py-8 z-20 header-portfolio"
  >
    <div class="flex justify-between font-medium">
      <div>
        <h1
          id="ditotext"
          class="flex md:text-2xl cursor-pointer"
          v-on:click="goTo('#home')"
        >
          <div class="font-bold">DITO</div>
          <div class="font-light">BUWONO</div>
        </h1>
      </div>
      <div>
        <a href="https://www.instagram.com/ditobuwono/">
          <font-awesome-icon
            class="mx-2 md:text-3xl"
            :icon="['fab', 'instagram']"
          />
        </a>
        <a href="https://www.linkedin.com/in/hanindito-buwono-98437a179/">
          <font-awesome-icon
            class="ml-1 lg:ml-2 md:text-3xl"
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
  transition: all 0.4s ease-in-out;
}

.header-portfolio {
  backdrop-filter: blur(1.5px);
}

#ditotext {
  opacity: 0;
  transform: translateX(25vw) translateY(25vw) scale(4);
  filter: blur(12px);
}

@media screen and (max-width: 960px) {
  #ditotext {
    transform: translateX(25vw) translateY(50vw) scale(2);
  }
}
</style>
