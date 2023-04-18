<script lang="ts" setup>
import LoginPanel from './components/panel.vue';
</script>

<template>
  <div class="login">
    <div>
      <img src="@/assets/image/login.svg" alt="" />
    </div>
    <div>
      <login-panel />
    </div>
  </div>
</template>

<style lang="less" scoped>
.login {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    flex: 1;
    margin-top: -10%;
    padding: 20px;
    text-align: center;
  }

  img {
    max-width: 500px;
  }
}
</style>
