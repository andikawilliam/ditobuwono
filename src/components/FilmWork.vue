<template>
  <div class="lg:w-2/3 mx-auto pb-16 lg:pb-32">
    <div class="overflow-x-auto whitespace-no-wrap text-center pb-1">
      <span
        class="accolade-text mr-4" 
        v-for="accolade in accolades"
        :key="accolade"
      >
        {{ accolade }}
      </span>
    </div>

    <div class="video-container" v-on:click="showText = false">
      <iframe
        class="grayscale"
        :src="embed"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        webkitAllowFullScreen
        mozallowfullscreen
        allowfullscreen
      >
      </iframe>
    </div>
    <div class="flex justify-center text-center pt-4">
      <div>
        <p class="title-text font-semibold">{{ title }}</p>
        <p>{{ role }}</p>
        <!-- <p
            class="accolade-text" 
            v-for="accolade in accolades"
            :key="accolade"
          >
            {{ accolade }}
        </p> -->
        <!-- <p>{{ type }}</p> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FilmWork",
  props: {
    // image: Object,
    title: String,
    type: String,
    role: String,
    accolades: Array,
    embed: String
  },
  data() {
    return {
      showText: true
    };
  }
});
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title-text {
  font-size: 2vw;
}
.accolade-text {
  font-size: 1vw;
}

@media screen and (max-width: 1204px) {
  .title-text {
    font-size: 4vw;
  }
  .accolade-text {
    font-size: 2vw;
  }
}


</style>
