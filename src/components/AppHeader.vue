<template>

  <header class="header-style">
    <div class="container h-100 d-flex justify-content-between align-items-center">
      <div class="fs-3">
        <router-link :to="{name: 'homepage' }">Paolo Napoli</router-link>
      </div>
      <div class="d-flex page-links">
        <div class="px-2">
          <router-link :to="{name: 'about-me' }">Chi sono</router-link>
        </div>
        <div class="px-2">
          <router-link :to="{name: 'contacts'}">Contatti</router-link>
        </div>
        <div class="px-2">
          <router-link :to="{name: 'contact-me'}">Scrivimi</router-link>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

  header {
    height: 50px;
    background-color: rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(10px);

    a{
      color: black;
      text-decoration: none !important;
    }

  }

</style>
