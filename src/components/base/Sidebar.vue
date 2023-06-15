<template>
  <div class="h-screen w-[379px] bg-white fixed top-0 left-0 overflow-y-auto y-6">
    <ul class="list-none mt-10 px-6">
      <li class="my-3">
        <router-link active-class="text-bright-green bg-soft-blue" to="/profile" class="block py-2.5 px-4 rounded transition duration-200 text-charcoal hover:bg-soft-blue hover:text-bright-green">Profile</router-link>
      </li>
      <li class="my-3">
        <router-link active-class="text-bright-green bg-soft-blue" to="/courses" class="block py-2.5 px-4 rounded transition duration-200 text-charcoal hover:bg-soft-blue hover:text-bright-green">Courses</router-link>
      </li>
      <li class="my-3">
        <router-link active-class="text-bright-green bg-soft-blue" to="/progress" class="block py-2.5 px-4 rounded transition duration-200 text-charcoal hover:bg-soft-blue hover:text-bright-green">Progress</router-link>
      </li>
      <li class="my-3">
        <router-link active-class="text-bright-green bg-soft-blue" to="/homeworks" class="block py-2.5 px-4 rounded transition duration-200 text-charcoal hover:bg-soft-blue hover:text-bright-green">Homeworks</router-link>
      </li>
      <li class="my-3">
        <router-link active-class="text-bright-green bg-soft-blue" to="/chats" class="block py-2.5 px-4 rounded transition duration-200 text-charcoal hover:bg-soft-blue hover:text-bright-green">Chats</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
</script>
