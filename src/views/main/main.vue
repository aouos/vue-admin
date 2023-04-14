<script lang="ts" setup>
import useCounterStore from '@/store/counter';

const counterStore = useCounterStore();

const changeCounter = () => {
  counterStore.changeCounterAction(counterStore.counter + 1);
};
</script>

<template>
  <div class="main">
    {{ counterStore.counter }}
  </div>
  <p>{{ counterStore.doubleCounter }}</p>
  <button @click="changeCounter">+1</button>
</template>

<style scoped>
.main {
  color: blueviolet;
}
</style>
