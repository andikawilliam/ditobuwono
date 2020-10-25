<template>
  <header class="w-full px-6 lg:px-16 py-12 z-20">
    <div class="flex justify-between font-medium text-black-onyx">
      <div>
        <h1 class="flex lg:text-3xl">
          <div class="font-bold">DITO</div>
          <div class="font-light">BUWONO</div>
        </h1>
      </div>
      <div class="flex">
        <a href="https://www.instagram.com/ditobuwono/">
          <font-awesome-icon
            class="mx-2 lg:text-3xl"
            :icon="['fab', 'instagram']"
          />
        </a>
        <a href="https://www.linkedin.com/in/hanindito-buwono-98437a179/">
          <font-awesome-icon
            class="lg:ml-2 lg:text-3xl"
            :icon="['fab', 'linkedin']"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheNav"
});
</script>
