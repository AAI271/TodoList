<template>
    <form :class="[
      'bg-gray-800', 
      'shadow-md', 
      'rounded', 
      'p-2',
      'w-full',
      'my-10',
      'border-2',
      isEditable ? 'border-gray-700' : 'border-white'
    ]">
      <div class="mb-4">
        <label class="block text-gray-300 text-xs font-bold mb-2" for="title">
          Title
        </label>
        <input v-model="title" :disabled="isEditable" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter title">
      </div>
      <div class="mb-6">
        <label class="block text-gray-300 text-xs font-bold mb-2" for="description">
          Description
        </label>
        <textarea v-model="description" :disabled="isEditable" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter description"></textarea>
      </div>
      
      <button v-if="isEditable" type="button" @click="Edit" class="p-2 m-2 border-1 shadow-lg bg-green-600 hover:bg-green-500 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
      </button>

      <button v-else type="button" @click="Save" class="p-2 m-2 border-1 shadow-lg bg-green-600 hover:bg-green-500 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>  
      </button>

      <button type="button" @click="Remove" class="p-2 m-2 border-1 shadow-lg bg-red-600 hover:bg-red-500 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
      </button>

      <button @click="toggleFavourited" type="button" class="p-2 m-2 border-1 shadow-lg bg-transparent hover:bg-gray-700 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" :fill="todo.favourited ? 'yellow' : 'none'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
      </button>

    </form>

  </template>
  
<script setup>
  import { defineProps } from 'vue';
  import useTodosStore from '@/stores/listTodo';

  import { ref } from 'vue'
  const props = defineProps({

    todo: {
      type: Object,
      required: true
    }
  });

  const title = ref(props.todo.title);
  const description = ref(props.todo.description);
  const todosStore = useTodosStore();
  const isEditable = ref(true);
  function Edit(e) {
    e.preventDefault()
    isEditable.value=false;
  }
  function Save(e) {
    e.preventDefault()
    todosStore.updateTodo(props.todo.id,{... props.todo, title:title.value,description:description.value})
    isEditable.value=true;
  }
  function Remove(e) {
    e.preventDefault()
    todosStore.removeTodo(props.todo.id)
  }
  function toggleFavourited(e) {
    e.preventDefault()
    todosStore.toggleFavourite(props.todo.id)
  }
</script>
  