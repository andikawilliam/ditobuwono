<template>
  <header
    id="header"
    class="fixed w-full px-6 lg:px-16 py-8 lg:py-12 z-20 header-main"
  >
    <div class="flex justify-between font-medium">
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
  mounted: function() {
    this.navChangeScroll();
  },
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
    },
    navChangeScroll() {
      gsap.fromTo(
        "#header",
        {
          background: `linear-gradient(
            180deg,
            rgba(247, 247, 242, 1) 0%,
            rgba(247, 247, 242, 0.7021183473389356) 50%,
            rgba(247, 247, 242, 0) 100%
          );`,
          color: "rgba(15, 15, 15)"
        },
        {
          scrollTrigger: {
            trigger: "#page-film",
            start: "top 80%",
            end: "top 80%",
            toggleActions: "play none reverse reverse"
          },
          background: `linear-gradient(
            180deg,
            rgba(15, 15, 15, 1) 0%,
            rgba(15, 15, 15, 0.7021183473389356) 50%,
            rgba(15, 15, 15, 0) 100%
          `,
          color: "rgba(247, 247, 242)",
          ease: "power4",
          duration: 0.4
        }
      );
    }
  }
});
</script>

<style scoped>
header {
  transition: all 0.4s ease-in-out;
}

.header-main {
  background: rgb(247, 247, 242);
  background: linear-gradient(
    180deg,
    rgba(247, 247, 242, 1) 0%,
    rgba(247, 247, 242, 0.7021183473389356) 69%,
    rgba(247, 247, 242, 0) 100%
  );
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
