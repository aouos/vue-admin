<script lang="ts" setup>
import useCounterStore from '@/store/counter';
import { baseRequest } from '@/service/index';
import { ElMessage } from 'element-plus';

const counterStore = useCounterStore();

const changeCounter = () => {
  counterStore.changeCounterAction(counterStore.counter + 1);
};

const requestData = () => {
  baseRequest.get({ url: '/login' }).then((res) => {
    console.log(res);

    ElMessage.success('请求成功');
  });
};
</script>

<template>
  <div class="main">
    {{ counterStore.counter }}
  </div>
  <p>{{ counterStore.doubleCounter }}</p>
  <el-button type="primary" @click="changeCounter">count +1</el-button>

  <el-button type="danger" @click="requestData">请求数据</el-button>
</template>

<style scoped>
.main {
  color: blueviolet;
}
</style>
