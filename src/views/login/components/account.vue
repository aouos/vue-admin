<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import useLoginStore from '@/store/modules/login';
import { LOGIN_NAME, LOGIN_PASSWORD } from '@/global/constants';
import { localCache } from '@/utils/cache';
import type { FormRules, ElForm } from 'element-plus';
import type { IAccount } from '@/types';

const store = useLoginStore();
const formRef = ref<InstanceType<typeof ElForm>>();

const loginInfo = reactive<IAccount>({
  name: localCache.getCache(LOGIN_NAME) ?? '',
  password: localCache.getCache(LOGIN_PASSWORD) ?? ''
});

const rules: FormRules = {
  name: [
    { required: true, message: '请输入账号信息', trigger: 'blur' },
    { pattern: /^[0-9a-z]{8,10}$/, message: '账号由8-10位数字字母组合哦', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^[0-9a-z]{6,}$/, message: '密码长度大于6位', trigger: 'blur' }
  ]
};

const loginAction = (remberPwd: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      const { name, password } = loginInfo;
      store.loginStoreAction({ name, password });

      if (remberPwd) {
        localCache.setCache(LOGIN_NAME, name);
        localCache.setCache(LOGIN_PASSWORD, password);
      } else {
        localCache.removeCache(LOGIN_NAME);
        localCache.removeCache(LOGIN_PASSWORD);
      }
    } else {
      ElMessage.warning('账号密码输入格式有误！');
    }
  });
};

defineExpose({
  loginAction
});
</script>

<template>
  <div class="account">
    <el-form :model="loginInfo" :rules="rules" label-width="54px" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="loginInfo.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="loginInfo.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.account {
}
</style>
