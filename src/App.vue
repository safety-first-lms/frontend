<script setup lang="ts">
import Sidebar from './components/base/Sidebar.vue';
import { useAuth } from './store/auth';

const auth = useAuth();
</script>
<template>
  <div class="w-full flex h-screen">
    <Sidebar v-if="auth.isAuthorized"/>
    <div class="bg-[#F9FAFA] ml-[379px] px-[48px] py-6 flex-grow">
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
