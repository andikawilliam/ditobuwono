<template>
  <div class="relative text-gray-ivory px-8 lg:px-20 py-40">
    <HeadingPortfolio :portfolio="title" :key="title" />
    <div class="lg:w-2/3 mx-auto">
      <div class="grid grid-cols-1">
        <transition-group name="podcast-complete">
          <div
            class="podcast-grid col-span-2 grayscale my-4"
            v-for="podcast in podcastsShown"
            :key="podcast.id"
          >
            <iframe
              :src="podcast.src"
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
              allow="encrypted-media"
            >
            </iframe>
          </div>
        </transition-group>
      </div>
      <button
        class="bg-gray-ivory text-black-onyx my-4 py-1 px-6 rounded-xl"
        v-on:click="addMorePodcast"
      >
        more
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import HeadingPortfolio from "../components/HeadingPortfolio.vue";

export default Vue.extend({
  name: "PortfolioPodcast",
  components: {
    HeadingPortfolio
  },
  data: function() {
    return {
      title: "TALKS",
      limit: 4,
      podcasts: [
        {
          id: 1,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/episode/4t7sqCp8WUWrBPQMxxIwn9"
        },
        {
          id: 2,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/episode/0Yi88NzUtsbTtoWTAFIRCM"
        },
        {
          id: 3,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/episode/1EHnsS90cf8GrxbxWPtwj6"
        },
        {
          id: 4,
          type: "soundcloud",
          src:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440655900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
          id: 5,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/episode/14fE8Q1JiaXRwm9LQAPuSX"
        },
        {
          id: 6,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/episode/28yLAnbOHFlNOq5zMIh6V7"
        },
        {
          id: 7,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/episode/1RUbojWjWv4wnDLESMbcq7"
        },
        {
          id: 8,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/episode/3mnaUMwIP0Sa3wmB71psFc"
        }
      ]
    };
  },
  computed: {
    podcastsShown: function(): object {
      return this.podcasts.slice(0, this.limit);
    }
  },
  methods: {
    addMorePodcast: function() {
      if (this.limit < this.podcasts.length) {
        this.limit = this.limit + 1;
        ScrollTrigger.refresh();
      }
    }
  }
});
</script>

<style scoped>
.podcast-grid {
  transition: transform 0.5s;
}
.podcast-grid:hover {
  transform: scale(1.02);
}
.podcast-complete-item {
  transition: all 1s;
}
.podcast-complete-enter,
.podcast-complete-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.podcast-complete-leave-active {
  position: absolute;
}
</style>
