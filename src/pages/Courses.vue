<template>
  <div class="w-full flex flex-col">
    <h6>Курсы</h6>
    <div class="flex gap-[13px] mt-6">
      <div v-for="(course, index) in courses" :key="index" class="card flex items-start justify-between">
        <div class="h-full flex justify-between flex-col">
          <div class="flex flex-col">
            <h4 class="text-white course-title">{{  course.title }}</h4>
            <p class="text-white course-subtitle max-w-[189px] mt-4">На рассвете 6 февраля в Турции произошла</p>
          </div>
          <button class="bg-white rounded-[10px] text-[#1D1D1D] font-semibold text-base max-w-[173px] h-[45px] mb-[15px]">Подробнее</button>
        </div>
        <div v-if="course.type === 'Main'" class="course-tag text-white text-base font-semibold">Важна</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCookies } from '@vueuse/integrations/useCookies';
import { ref, onMounted } from 'vue';

const { get } = useCookies();
const courses = ref();
const getCourses = async () => {
  const response = await fetch('http://167.71.61.120:3000/courses/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${get('access_token')}`
    }
  });

  const data = await response.json();
  courses.value = data.courses;
};
onMounted(() =>{
  getCourses();
});
</script>
<style langs="scss" scoped>
h6{
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.4px;
}
.card{
  width: 100%;
  max-width: 461px;
  height: 286px;
  background: #869667;
  border-radius: 10px;
  padding: 24px;
  background-image: url(../../public/images/course.png);
  background-position: bottom right;
  background-repeat: no-repeat;
}

.course-title{
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.course-subtitle{
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 122.336%;
}

.course-tag{
  background: linear-gradient(93deg, #8759EA 0%, #AE21BE 100%);
  border-radius: 10px;
  width: 93px;
  text-align: center;
  padding: 8px 24px;
}
</style>
