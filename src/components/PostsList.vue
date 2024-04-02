<template>
    <div class="w-full my-5">
      <div v-for="todo in todos" :key="todo.id">
        <PostItem :todo="todo"/>
      </div>
    </div>
</template>
  
<script setup lang="ts">
  import useTodosStore from "@/stores/listTodo";
import { computed } from "vue";
import PostItem from "./PostItem.vue";
  
      const todosStore = useTodosStore();
      const todos = computed(() => {return todosStore.todos});
      todosStore.bindDataToList()
  </script>
  