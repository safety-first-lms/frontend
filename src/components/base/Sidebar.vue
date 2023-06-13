<template>
  <div class="h-screen w-[379px] bg-gray-800 text-white fixed top-0 left-0 overflow-y-auto p-6">
    <ul class="list-none mt-10 px-6">
      <li class="text-gray-300 my-3">
        <router-link to="/profile" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Profile</router-link>
      </li>
      <li class="text-gray-300 my-3">
        <router-link to="/courses" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Courses</router-link>
      </li>
      <li class="text-gray-300 my-3">
        <router-link to="/progress" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Progress</router-link>
      </li>
      <li class="text-gray-300 my-3">
        <router-link to="/homeworks" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Homeworks</router-link>
      </li>
      <li class="text-gray-300 my-3">
        <router-link to="/chats" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Chats</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
</script>
