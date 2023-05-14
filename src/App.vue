<template>
  <!-- <AppHeader/>
  <AppMain/> -->
  <div class="d-flex">
    <h1 class="text-center">Zimo Brutto Coglione Frocio</h1>
  </div>
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

  export default {
    components: { AppHeader, AppMain }
}
</script>

<style lang="scss">
  @import "./style/global.scss";
</style>