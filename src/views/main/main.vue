<script lang="ts" setup>
import Xmenu from '@/components/xmenu/xmenu.vue';
</script>

<template>
  <el-container class="layout">
    <el-aside class="layout-aside">
      <xmenu />
    </el-aside>
    <el-container>
      <el-header class="layout-header">Header</el-header>
      <el-main class="layout-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.layout {
  height: 100%;
  width: 100%;

  &-aside {
    width: 200px;
    background-color: #7563f6;
  }

  &-header {
    background-color: blanchedalmond;
  }

  &-main {
    background-color: aliceblue;
  }
}
</style>
