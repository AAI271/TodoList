<script setup lang="ts">
import PostsList from '@/components/PostsList.vue';
import PostForm from '../components/PostForm.vue';
import FavouritedPosts from '../components/FavouritedPosts.vue';
</script>
<template>
  <div class="about">
    <PostForm/>
    <div class="flex w-[90vw] justify-between mx-auto flex-col lg:flex-row"> 
      <FavouritedPosts/>
      <PostsList/>
    </div>
  </div>
</template>
