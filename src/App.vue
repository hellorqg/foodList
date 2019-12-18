<template>
  <div>
    <headers></headers>

    <div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <div class="container-fluid">
        <div class="row">
        <left></left>
        <router-view></router-view>
        </div>
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
