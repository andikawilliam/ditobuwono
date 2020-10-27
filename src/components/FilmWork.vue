<template>
  <div class="film-container pb-12 lg:pb-32">
    <a :href="href" target="_blank" rel="noopener noreferrer">
      <div class="film-content text-shadow" v-on:click="showText = false">
        <img class="absolute rounded-md grayscale" :src="image" />
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
            class="accolade-text float-right"
            v-for="accolade in accolades"
            :key="accolade"
          >
            {{ accolade }}
          </p>
        </div>
      </div>
    </a>
    <!-- <div class="flex justify-end text-right pt-2 lg:pt-4">
      <div>
        <p class="title-text font-semibold">{{ title }}</p>
        <p>{{ role }}</p>
        <p
            class="accolade-text" 
            v-for="accolade in accolades"
            :key="accolade"
          >
            {{ accolade }}
        </p>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FilmWork",
  props: {
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
      showText: true
    };
  }
});
</script>

<style scoped>
.film-content {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
}

/* .container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} */

.play-icon {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease;
}

.film-container:hover .play-icon{
  transform: translateY(-50%) scale(1.2);
  color: #BB0A21;
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
  text-shadow: 1px 1px 4px rgba(15, 15, 15, 0.8);
}

@media screen and (max-width: 1204px) {
  .title-text {
    font-size: 4vw;
  }
  .role-text {
    font-size: 2.4vw;
  }
  .accolade-text {
    font-size: 2.2vw;
    margin: 0.06em 0.2em;
  }
}
</style>
