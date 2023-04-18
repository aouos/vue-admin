<script lang="ts" setup>
import { ref } from 'vue';
import Account from './account.vue';
import Qrcode from './qrcode.vue';

const accountRef = ref<InstanceType<typeof Account>>();

const handleLoginBtnClick = () => {
  accountRef.value?.loginAction();
};
</script>

<template>
  <div class="login-panel">
    <div class="title">后台管理系统</div>

    <div class="panel">
      <el-tabs type="border-card" stretch>
        <el-tab-pane label="账号密码">
          <account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="扫码登陆">
          <qrcode />
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="control">
      <el-checkbox>记住密码</el-checkbox>
      <a href="">忘记密码</a>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginBtnClick">立即登录</el-button>
  </div>
</template>

<style lang="less" scoped>
.login-panel {
  width: 300px;

  .title {
    font-size: 24px;
    margin-bottom: 28px;
  }
}

.control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.login-btn {
  width: 100%;
}
</style>
