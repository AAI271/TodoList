<template>
    <div class=" my-5  w-1/3">
  <h2 class="font-bold text-xl ml-5 text-gray-300">FavouritedPosts</h2>
  <div v-for="todo in todos" :key="todo.id">
    <div class="ml-5 border-2 rounded-xl border-gray-600 inline-block px-5 py-1 my-2">
      <h3 class="font-bold text-lg text-gray-200">{{todo.title}}</h3>
    </div>
  </div>
</div>

  </template>
  
  <script setup lang="ts">
  import useTodosStore from "@/stores/listTodo";
import { computed } from "vue";

  
      const todosStore = useTodosStore();
      const todos = computed(() => {return todosStore.favouritedTodos});
      todosStore.bindDataToList()
  </script>
  