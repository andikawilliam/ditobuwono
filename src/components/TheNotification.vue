<template>
  <div
    id="notification"
    class="w-full px-6 bg-gray-dito text-gray-ivory shadow"
    v-show="notifState && notifText"
  >
    <div
      class="relative grid grid-cols-12 my-2 font-cormorant sm:text-center text-notif lg:text-lg"
    >
      <p class="col-span-11 lg:col-span-12">
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

<style scoped>
#notification {
  height: 0;
  overflow: hidden;
  font-size: 0.9em;
}
</style>
