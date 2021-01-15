<template>
  <div class="relative text-gray-ivory px-8 md:px-16 lg:px-20 py-16 sm:py-20 lg:py-24">
    <PortfolioHeading :title="title" :description="description" />
    <div class="lg:w-2/3 mx-auto">
      <div class="podcast-grid-container w-full">
        <div
          class="podcast-grid mb-16 grayscale"
          v-for="podcast in podcasts"
          :key="podcast.id"
        >
          <transition name="podcast-fade">
            <div
              class="podcast-text border-gray-dito-text"
              v-show="!podcast.show"
              v-on:click="podcast.show = !podcast.show"
            >
              {{ podcast.name }}
            </div>
          </transition>
          <iframe
            v-if="podcast.show"
            :src="podcast.src[podcast.active - 1]"
            loading="lazy"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
            allow="encrypted-media"
          >
          </iframe>
          <div class="my-2 text-center font-semibold" v-show="podcast.show">
            <div
              class="inline-block mr-2 text-sm lg:mx-4 cursor-pointer"
              v-show="podcast.src.length > 1"
              v-on:click="
                podcast.active = loopNext(
                  podcast.active - 1,
                  podcast.src.length
                )
              "
            >
              Prev
            </div>
            <div
              class="podcast-index"
              v-for="(link, index) in podcast.src"
              :key="`podcast.name-${index}`"
              v-bind:class="{ 'podcast-active': index == podcast.active - 1 }"
              v-on:click="podcast.active = index + 1"
            >
              {{ index + 1 }}
            </div>
            <div
              class="inline-block ml-2 text-sm lg:mx-4 cursor-pointer"
              v-show="podcast.src.length > 1"
              v-on:click="
                podcast.active = loopNext(
                  podcast.active + 1,
                  podcast.src.length
                )
              "
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../content/PortfolioPodcast.ts"></script>

<style scoped>
.podcast-grid {
  margin-top: 5px;
  height: 160px;
}
.podcast-text:hover {
  background-color: #767676;
  transform: translateY(-2%);
}
.podcast-text {
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5em 1em;
  text-align: center;
  font-size: 2.4vw;
  font-style: italic;
  font-weight: 500;
  border-radius: 0.4em;
  border-width: 4px;
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

.podcast-index {
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 100%;
  display: inline-block;
  padding: 0 0.5em;
  margin: 0 0.2em;
  color: #404040;
}

.podcast-index:hover {
  background-color: #f7f7f2;
  color: #262626;
  opacity: 0.5;
}

.podcast-active {
  background-color: #f7f7f2;
  color: #262626;
}

@media screen and (max-width: 960px) {
  .podcast-grid {
    height: 150px;
  }
  .podcast-text {
    font-size: 5vw;
    border-width: 2px;
    border-radius: 1em;
  }

  .podcast-index {
    display: inline-block;
    padding: 0 0.4em;
    margin: 0 0.015em;
  }
}
</style>
