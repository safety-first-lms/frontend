<template>
  <div>
    <div class="flex items-center">
      <p class="text-xl font-medium opacity-30	text-charcoal">Курсы</p>
      <svg class="mx-4" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M1 10.5L4.79289 6.70711C5.18342 6.31658 5.18342 5.68342 4.79289 5.29289L1 1.5" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <p class="text-xl font-medium text-charcoal">{{ course?.course?.title}}</p>
    </div>
    <div class="bg-[#F5F5F5] rounded-[10px] p-6 mt-6">
      <div class="flex items-center">
        <p class="text-3xl font-medium mr-4">{{ course?.course?.title }}</p>
        <div class="course-tag text-white text-base font-semibold">Важна</div>
      </div>
      <p class="max-w-[484px] text-base opacity-60 mt-6">{{ course?.course?.description }}</p>
      <div class="flex flex-col mt-[30px]">
        <p>Автор <span class="ml-[52px] text-dark-grey font-semibold text-lg">{{ course?.course?.createdBy }}</span></p>
        <p>Куратор <span class="ml-[33px] text-dark-grey font-semibold text-lg">{{ course?.course?.curator }}</span></p>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 mt-3">
      <div v-for="(lesson, lessonId) in course?.course.lessons" :key="lessonId" class="lesson-card py-6 px-4 flex flex-col justify-between">
        <div class="flex items-start justify-between">
          <div class="flex flex-col">
            <p class="text-white font-semibold text-2xl">{{ lesson.title }}</p>
            <p class="text-white text-lg mt-4">{{ lesson.content }}</p>
          </div>
          <div class="course-tag text-white text-base font-semibold">Важна</div>
        </div>
        <router-link class="rounded-[10px] bg-white h-[45px] max-w-[173px] w-full flex items-center justify-center" :to="`/lessons/${lesson.id}`">Смотреть урок</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCookies } from '@vueuse/integrations/useCookies';

const route = useRoute();
const { get } = useCookies();
const course = ref();

onMounted(async () => {
  const response = await fetch(`http://167.71.61.120:3000/courses/${route.params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${get('access_token')}`
    }
  });
  course.value = await response.json();
  console.log(course.value);
});
</script>
<style lang="scss" scoped>
.course-tag{
  background: linear-gradient(93deg, #8759EA 0%, #AE21BE 100%);
  border-radius: 10px;
  width: 93px;
  text-align: center;
  //padding: 8px 24px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lesson-card{
  border-radius: 10px;
  width: 100%;
  max-width: 449px;
  height: 286px;
  background-image: url('/images/lesson.png');
  background-repeat: no-repeat;
}
</style>
