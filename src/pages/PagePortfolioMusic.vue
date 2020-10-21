<template>
  <div class="relative text-gray-ivory px-8 lg:px-20 py-40">
    <HeadingPortfolio :portfolio="title" :key="title" />
    <div class="relative lg:w-2/3 mx-auto">
      <div class="grid auto-rows-fr grid-flow-row gap-4">
        <div
          class="row-span-1 col-span-5 lg:row-span-3 lg:col-span-2 grayscale"
        >
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/769393264&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          >
          </iframe>
        </div>
        <div
          class="row-span-1 col-span-5 lg:row-span-2 lg:col-span-3 grayscale"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/pvJEInkcfxI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
        <div
          class="row-span-1 col-span-5 lg:row-span-1 lg:col-span-3 grayscale"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FSuddenlyKaget%2Fsuddenlykaget-mixtape-maharddhika%2F"
            frameborder="0"
          >
          </iframe>
        </div>
        <div class="row-span-1 col-span-5 lg:row-span-2 grayscale">
          <iframe
            width="100%"
            height="100%"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbuvv%2F"
            frameborder="0"
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
  name: "PortfolioMusic",
  components: {
    HeadingPortfolio
  },
  data: function() {
    return {
      title: "MIXTAPES"
    };
  }
});
</script>
