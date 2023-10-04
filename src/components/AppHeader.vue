<template>

  <header class="header-style p-2">
    <div class="container-header h-100 d-flex justify-content-between align-items-center">
      <div class="fs-3 main-link">
        <router-link :to="{name: 'homepage' }"><i> Paolo Napoli - Web Developer</i></router-link>
      </div>
      <div class="d-flex page-links">
        <div class="px-2 fs-5">
          <router-link :to="{name: 'about-me' }">Chi sono</router-link>
        </div>
        <div class="px-2 fs-5">
          <router-link :to="{name: 'contacts'}">Contatti</router-link>
        </div>
        <div class="px-2 fs-5">
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
    position: sticky;
    top: 0;
    background-color: rgba(0, 0, 0, 0.02);
    backdrop-filter: blur(4px);
    z-index: 1;
    display: flex;
    justify-content: center;

    a{
      color: white;
      text-decoration: none !important;
    }

    .main-link{
      font-weight: 700;
    }
    .container-header{
        width: 90%;
    }

  }

</style>
