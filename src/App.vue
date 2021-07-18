<template>
  <div class="site">
    <div class="nav">
      <div class="logo" />
      <div class="pages">
        <div class="home">
          <!-- TODO: Add wolf SVG here but make sure it ends up at 100px x 100px @ 1080p (scaled up or down based on viewport) -->
        </div>
        <div class="box1">
          <p>About</p>
        </div>
        <div class="box2">
          <p>Crafts</p>
        </div>
        <div class="box3">
          <p>Programs</p>
        </div>
        <div class="box4">
          <p>Social</p>
        </div>    
      </div>  
    </div>
    <div class="content">
      <div class="namebox">
        <div class="name">
          <p>Faunsce</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {

  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

  .site {
    display: grid;
    grid-area: inherit;
    grid-template-columns: 1fr;
    grid-template-rows: 48px 1fr;
    grid-template-areas: 
      "nav"
      "content"
    ;
    width: 100vw;
    height: 100vh;
  }

    .nav {
      grid-area: nav;
      display: grid;
      grid-template-columns: 48px 1fr 48px;
      grid-template-rows: 1fr;
      grid-template-areas: 
        "logo pages ."
      ;
      background: #330851;
    }
      .logo {
        grid-area: logo;
        background: coral;
      }

      .pages {
        grid-area: pages;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
      }

        p {
          color: #F5D5E0;
          font-family: 'Work Sans', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 0px;
          background: red;
        }

        .box1 {
          flex: none;
          order: 0;
          flex-grow: 0;
          margin: 0px 0px;
          background: red;
        }

        .box2 {
          flex: none;
          order: 1;
          flex-grow: 0;
          margin: 0px 0px;
          background: red;
        }

        .box3 {
          flex: none;
          order: 2;
          flex-grow: 0;
          margin: 0px 0px;
          background: red;
        }

        .box4 {
          flex: none;
          order: 3;
          flex-grow: 0;
          margin: 0px 0px;
          background: red;
        }

    .content {
      grid-area: content;
      display: grid;
      grid-template-columns: 3fr 1fr 3fr;
      grid-auto-rows: 3fr 1fr 3fr;
      grid-template-areas: 
        ". . ."
        ". namebox ."
        ". . ."
      ;
      background: #210535;
    }

      .namebox {
        grid-area: namebox;
        display: inherit;
        background: blue;
      }

        .name {
          color: brown;
        }

</style>
