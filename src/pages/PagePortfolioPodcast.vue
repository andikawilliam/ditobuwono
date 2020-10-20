<template>
  <div class="relative text-gray-ivory px-8 lg:px-20 py-40">
    <HeadingPortfolio :portfolio="title" :key="title" />
    <div class="lg:w-2/3 mx-auto">
      <div class="grid grid-rows-4 grid-cols-2 gap-8">
        <div class="col-span-2 grayscale">
          <iframe
            src="https://open.spotify.com/embed-podcast/show/5ng0JMF0LgAdtNSsA8Vtpw"
            width="100%"
            height="100%"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          >
          </iframe>
        </div>
        <div class="col-span-2 grayscale">
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/1EHnsS90cf8GrxbxWPtwj6"
            width="100%"
            height="100%"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          >
          </iframe>
        </div>
        <div class="col-span-2 grayscale">
          <iframe
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440655900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            width="100%"
            height="100%"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            allow="autoplay"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeadingPortfolio from "../components/HeadingPortfolio.vue";

export default Vue.extend({
  name: "PortfolioPodcast",
  components: {
    HeadingPortfolio
  },
  data: function() {
    return {
      title: "TALKS",
      podcasts: [
        {
          id: 1,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/show/5ng0JMF0LgAdtNSsA8Vtpw"
        },
        {
          id: 2,
          type: "spotify",
          src:
            "https://open.spotify.com/embed-podcast/episode/1EHnsS90cf8GrxbxWPtwj6"
        },
        {
          id: 3,
          type: "soundcloud",
          src:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440655900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
      ]
    };
  }
});
</script>
