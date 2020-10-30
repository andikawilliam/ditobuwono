<template>
  <div class="relative text-gray-ivory px-8 lg:px-20 py-40">
    <PortfolioHeading :title="title" :description="description" />
    <div class="lg:w-2/3 mx-auto">
      <div class="w-full">
        <div
          class="podcast-grid my-6 grayscale"
          v-for="podcast in podcastsShown"
          :key="podcast.id"
        >
          <transition name="podcast-fade">
            <div
              class="podcast-text border-gray-dito"
              v-show="!podcast.show"
              v-on:click="podcast.show = !podcast.show"
            >
              {{ podcast.name }}
            </div>
          </transition>
          <iframe
            v-if="podcast.show"
            :src="podcast.src[0]"
            loading="lazy"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
            allow="encrypted-media"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import PortfolioHeading from "../components/PortfolioHeading.vue";

export default Vue.extend({
  name: "PortfolioPodcast",
  components: {
    PortfolioHeading
  },
  data: function() {
    return {
      title: "talks",
      description: `
        Dito started his own podcast with 
        <span class="font-semibold">Dara Dan Pemuda</span>,
        then within the same year in 2018, 
        <span class="font-semibold">Loka Bersua</span> 
        was made with his friends as a guest star. Both podcast's talking about 
        sharing the perspective and experience listening to variant genre of 
        music. 
        <br><br>
        In 2019, he was entrusted to manage the
        <span class="font-semibold">EksotisMerauke</span> 
        podcast, where the podcast tells about the experiences when he and his 
        college friends participated in social services in Merauke, Papua.
      `,
      limit: 3,
      podcasts: [
        {
          id: 1,
          show: false,
          name: "Eksotis Merauke",
          type: "spotify",
          src: [
            "https://open.spotify.com/embed-podcast/episode/4t7sqCp8WUWrBPQMxxIwn9",
            "https://open.spotify.com/embed-podcast/episode/0Yi88NzUtsbTtoWTAFIRCM",
            "https://open.spotify.com/embed-podcast/episode/1EHnsS90cf8GrxbxWPtwj6",
            "https://open.spotify.com/embed-podcast/episode/14fE8Q1JiaXRwm9LQAPuSX",
            "https://open.spotify.com/embed-podcast/episode/28yLAnbOHFlNOq5zMIh6V7",
            "https://open.spotify.com/embed-podcast/episode/1RUbojWjWv4wnDLESMbcq7",
            "https://open.spotify.com/embed-podcast/episode/3mnaUMwIP0Sa3wmB71psFc"
          ]
        },
        {
          id: 2,
          show: false,
          name: "Loka Bersua",
          type: "soundcloud",
          src: [
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440655900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ]
        },
        {
          id: 3,
          show: false,
          name: "Dara dan Pemuda",
          type: "mixcloud",
          src: [
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol1%2F"
          ]
        }
      ]
    };
  },
  computed: {
    podcastsShown: function(): object {
      return this.podcasts.slice(0, this.limit);
    }
  }
});
</script>

<style scoped>
.podcast-grid {
  transition: all 0.5s;
  margin-top: 5px;
  height: 150px;
}
.podcast-grid:hover {
  transform: scale(1.02);
}
.podcast-text {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5em 1em;
  text-align: center;
  font-size: 2.4vw;
  font-family: Rubik;
  font-style: italic;
  font-weight: 500;
  border-radius: 0.1em;
  border-width: 5px;
}

.podcast-fade-enter-active,
.podcast-fade-leave-active {
  position: absolute;
  transition: all 0.5s;
}
.podcast-fade-enter,
.podcast-fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1204px) {
  .podcast-grid {
    height: 120px;
  }
  .podcast-text {
    font-size: 6vw;
  }
}
</style>
