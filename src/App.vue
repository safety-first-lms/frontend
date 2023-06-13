<script setup lang="ts">
import Sidebar from './components/base/Sidebar.vue';
</script>
<template>
  <div>
    <Sidebar/>
    <div class="ml-64">
      <router-view/>
    </div>
  </div>
</template>
<style scoped>
</style>
