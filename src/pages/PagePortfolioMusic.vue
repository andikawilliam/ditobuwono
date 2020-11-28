<template>
  <div class="relative text-gray-ivory px-8 md:px-12 lg:px-20 py-40">
    <PortfolioHeading :title="title" :description="description" />
    <div class="relative lg:w-2/3 mx-auto">
      <div class="w-full music-grid-container">
        <div
          class="row-span-1 col-span-5 grayscale"
          v-for="mixtape in mixtapes"
          :key="mixtape.id"
          v-bind:class="gridSpan(mixtape.rowGrid, mixtape.colGrid)"
        >
          <transition name="mixtape-fade">
            <div
              v-show="!mixtape.show"
              class="mixtape-text border-gray-dito-text"
              v-on:click="mixtape.show = true"
            >
              {{ mixtape.name }}
            </div>
          </transition>
          <transition appear>
            <iframe
              v-if="mixtape.show"
              :src="mixtape.src[mixtape.active - 1]"
              loading="lazy"
              width="100%"
              height="100%"
              scrolling="no"
              frameborder="0"
              allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
          </transition>
          <div
            class="my-2 text-center font-semibold"
            v-show="mixtape.show && mixtape.id === 4"
          >
            <div
              class="inline-block mx-4 cursor-pointer"
              v-on:click="
                mixtape.active = loopNext(
                  mixtape.active - 1,
                  mixtape.src.length
                )
              "
            >
              Prev
            </div>
            <div
              class="mixtape-index"
              v-for="(link, index) in mixtape.src"
              :key="`mixtape.name-${index}`"
              v-bind:class="{ 'mixtape-active': index == mixtape.active - 1 }"
              v-on:click="mixtape.active = index + 1"
            >
              {{ index + 1 }}
            </div>
            <div
              class="inline-block mx-4 cursor-pointer"
              v-on:click="
                mixtape.active = loopNext(
                  mixtape.active + 1,
                  mixtape.src.length
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

<script lang="ts" src="../content/PortfolioMusic"></script>

<style scoped>
.music-grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 120px);
  grid-auto-flow: row;
  gap: 1rem;
}

.mixtape-text {
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
  border-radius: 0.1em;
  border-width: 4px;
}

.mixtape-text:hover {
  background-color: #767676;
  transform: translateY(-2%);
}

.mixtape-index {
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 100%;
  display: inline-block;
  padding: 0 0.5em;
  margin: 0 0.2em;
  color: #404040;
}

.mixtape-index:hover {
  background-color: #f7f7f2;
  color: #262626;
  opacity: 0.5;
}

.mixtape-active {
  background-color: #f7f7f2;
  color: #262626;
}

@media screen and (max-width: 960px) {
  .mixtape-text {
    font-weight: 700;
    font-size: 6vw;
  }
  .mixtape-index {
    margin: 0 0.05em;
  }
  .music-grid-container {
    grid-template-rows: repeat(4, 150px);
  }
}

.mixtape-fade-enter-active,
.mixtape-fade-leave-active {
  position: absolute;
}
.mixtape-fade-enter,
.mixtape-fade-leave-to {
  opacity: 0;
}
</style>
