<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold mb-8">ToDoList</h1>
    <div class="mb-8 flex w-full justify-around items-center text-9xl py-20">
      <img src="https://gitlab.com/uploads/-/system/group/avatar/54254384/2560px-Vue.js_Logo_2.png" alt="Stack Photo" class=" w-44 h-44 rounded-lg">
      +
      <img src="https://pinia.vuejs.org/logo.svg" alt="Stack Photo" class=" w-44 h-44  rounded-lg">
      +
      <img src="https://www.freedownloadlogo.com/logos/t/tailwind-css-2.svg" alt="Stack Photo" class=" w-44 h-44  rounded-lg">
    </div>
    <RouterLink to="/about" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg">
      Get Started with Icon
    </RouterLink>
  </main>
</template>
