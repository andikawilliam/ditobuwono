<template>
  <div class="w-full px-6 py-2 bg-gray-ivory shadow-sm" v-show="notifState && notifText">
    <div
      class="relative grid grid-cols-11 text-1.8vh md:text-sm sm:text-center lg:text-base"
    >
      <p class="col-span-10 lg:col-span-11">
        <a :href="notifLink">
          {{ this.notifText }}
        </a>
      </p>
      <button class="md:absolute md:right-0" v-on:click="closeNotification">
        ⓧ
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="../content/NotificationText.ts"></script>

<style scoped></style>
