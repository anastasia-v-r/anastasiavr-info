<template>
  <div class="site">
    <Nav style="grid-area:nav"/>
    <router-view style="grid-area:site"/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Seaweed+Script&display=swap');

  .site {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 48px 1fr;
    grid-template-areas:
      "nav"
      "site"    
    ;

    width: 100vw;
    height: 100vh;
    background: #210535;;
  }
</style>
