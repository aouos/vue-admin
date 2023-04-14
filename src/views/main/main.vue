<script lang="ts" setup>
import useCounterStore from '@/store/counter';
import { baseRequest } from '@/service/index';

const counterStore = useCounterStore();

const changeCounter = () => {
  counterStore.changeCounterAction(counterStore.counter + 1);
};

const requestData = () => {
  baseRequest.get({ url: '/login' }).then((res) => {
    console.log(res);
  });
};
</script>

<template>
  <div class="main">
    {{ counterStore.counter }}
  </div>
  <p>{{ counterStore.doubleCounter }}</p>
  <button @click="changeCounter">+1</button>

  <button @click="requestData">请求数据</button>
</template>

<style scoped>
.main {
  color: blueviolet;
}
</style>
