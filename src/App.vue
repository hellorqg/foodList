<template>
  <div>
    <headers></headers>

    <div>
      <div class="container-fluid">
        <div class="row">
        <left></left>
        <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "./components/header";

// 左侧导航列表
import left from "./components/left"
export default {
  components: {
    headers,

    left
  }
};
</script>

<style>
</style>
