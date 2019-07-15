<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <!-- 跳转谁就展现谁 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
 components:{
    //appHeader=="app-header"(前提是驼峰型)
    appHeader:Header
 }
}
</script>

<style>

</style>
