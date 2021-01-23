<template>
  <div :id="filmId" class="film-container  pb-12 lg:pb-32 xl:pb-16">
    <a :href="href" target="_blank" rel="noopener noreferrer">
      <div class="film-content text-shadow" v-on:click="showText = false">
        <img class="absolute w-full rounded-md grayscale" :src="image" />
        <div class="absolute px-2 py-1 lg:px-4 lg:py-2">
          <p class="title-text font-semibold">{{ title }}</p>
          <p class="role-text float-left">{{ role }}</p>
        </div>
        <div class="absolute inset-0 text-center">
          <font-awesome-icon
            class="play-icon text-2xl lg:text-5xl"
            :icon="['fas', 'play-circle']"
          />
        </div>
        <div
          class="absolute text-right right-0 bottom-0 px-2 py-1 lg:px-4 lg:py-2"
        >
          <p
            class="accolade-text float-right font-medium"
            v-for="accolade in accolades"
            :key="accolade"
          >
            {{ accolade }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "FilmWork",
  props: {
    id: Number,
    image: String,
    title: String,
    type: String,
    role: String,
    accolades: Array,
    href: String,
    embed: String
  },
  data() {
    return {
      showText: true,
      filmId: "film-" + this.id
    };
  },
  mounted: function() {
    const direction = this.id % 2 == 0 ? -80 : 80;
    this.filmAnimation(direction);
  },
  methods: {
    filmAnimation(direction: number) {
      gsap.fromTo(
        "#" + this.filmId,
        { autoAlpha: 0, x: direction },
        {
          scrollTrigger: {
            trigger: "#" + this.filmId,
            start: "top 90%",
            end: "top 90%",
            scrub: true
          },
          autoAlpha: 1,
          x: 0,
          ease: "power4",
          duration: 0.4
        }
      );
    }
  }
});
</script>

<style scoped>
.film-content {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.film-container {
  transition: all 0.5s ease;
  color: #e6e4e4;
  font-family: "Bitter";
}

.play-icon {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease;
}

.film-container:hover {
  transform: translateY(-1%);
}

.film-container:hover .play-icon {
  transform: translateY(-50%) scale(1.2);
  color: #bb0a21;
}

.title-text {
  font-size: 2vw;
}
.role-text {
  font-size: 1vw;
}
.accolade-text {
  font-size: 1.2vw;
  margin: 0.1em 0.2em;
}

.text-shadow {
  text-shadow: 1.5px 1.5px 4px rgba(15, 15, 15, 0.8);
}

@media screen and (max-width: 960px) {
  .title-text {
    font-size: 4vw;
  }
  .role-text {
    font-size: 2.4vw;
  }
  .accolade-text {
    font-size: 2vw;
    margin: 0.06em 0.2em;
  }
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(15, 15, 15, 0.8);
  }
}
</style>
