<template>
    <div class="w-full px-6 py-2 bg-gray-dito" v-show="notifState && notifText">
      <div class="relative grid grid-cols-11 text-1.8vh md:text-base sm:text-center">
        <p class="col-span-10 md:col-span-11">
          <a href="https://www.viddsee.com/video/belrusak/ywxkh">
            {{ this.notifText }}
          </a>
        </p>
        <button
          class="md:absolute md:right-0"
          v-on:click="closeNotification"
        >
          ⓧ
        </button>
      </div>
    </div>
</template>

<script lang="ts" src="../content/NotificationText.ts">
</script>

<style scoped>
</style>
