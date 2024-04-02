<template>
    <div class="w-[90vw] my-5 mx-auto">
  <form @submit.prevent="handleSubmit" class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="title">
        Title
      </label>
      <input v-model="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter title">
    </div>
    <div class="mb-6">
      <label class="block text-gray-300 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <textarea v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter description"></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </div>
  </form>
</div>

</template>
  
  <script>
  import useTodosStore from '@/stores/listTodo';
import { ref } from 'vue';
  
  export default {
    setup() {
      const title = ref('');
      const description = ref('');
      const todosStore = useTodosStore();
  
      const handleSubmit = () => {
        if(!title.value || !description.value){
          return
        }
      todosStore.addTodo({
        id: 'generateId()'+new Date(), 
        title: title.value,
        description: description.value,
        status: false, 
        favourited: false 
      });
      title.value = '';
      description.value = '';
    };
  
      return {
        title,
        description,
        handleSubmit
      };
    }
  };
  </script>
  