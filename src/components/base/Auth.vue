<template>
  <section id="auth" class="h-screen gap-10 flex justify-content items-center p-8">
    <div class="w-full flex justify-center">
      <form class="w-full max-w-[444px] flex flex-col" @submit.prevent="signIn">
      <h1 class="text-center text-dark-grey text-3xl font-bold">Авторизация</h1>
      <div class="flex flex-col mt-10">
        <div class="flex flex-col">
          <label for="username">E-mail</label>
          <input id="username" v-model="user.login" class="border border-solid rounded-lg border-cool-grey h-[60px]" name="username" type="text"/>
        </div>
        <div class="flex flex-col mt-6">
        <label for="password">Пароль</label>
        <input id="password" v-model="user.password" class="border border-solid rounded-lg border-cool-grey h-[60px]" name="password" type="password"/>
      </div>
      </div>
      <button class="bg-bright-green text-white py-5 rounded-lg mt-6">Войти</button>
      <a href="#" class="text-center text-steel-grey mt-6">Забыли пароль?</a>
    </form>
    </div>

    <div class="w-full h-full bg-deep-green rounded-[30px] p-16">
      <h1 class="text-white text-4xl font-semibold">Самый простой способ понять что-то</h1>
      <p class="text-white mt-6">Проходите курсы и больше не будет проблем</p>
      <div class="bg-white h-[480px] rounded-lg mt-10"/>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useAuth } from '../../store/auth';
import { useRouter } from 'vue-router';

const user = ref({
  login: '',
  password: ''
});

const auth = useAuth();
const router = useRouter();

watchEffect(() => {
  if (auth.isAuthorized) {
    router.push('/');
  }
});

const signIn = () => {
  auth.login({login: user.value.login, password: user.value.password});
};
</script>
<style lang="scss" scoped>

</style>
