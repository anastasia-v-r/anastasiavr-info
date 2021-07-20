<template>
  <div class="site">
    <div class="nav">
      <div class="logo" />
      <div class="nav-links">
          <div class="nav-link" style="order: 0">About</div>
          <div class="nav-link" style="order: 1">Crafts</div>
          <div class="nav-link" style="order: 2">Programs</div>
          <div class="nav-link" style="order: 3">Social</div> 
      </div>  
    </div>
    <div class="content">
      <div class="namebox">
        <div class="name">Faunsce</div>
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

    .nav {
      grid-area: nav;
      background: #330851;

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;

      position: relative;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
    }
      .logo {
        /* Icon */

        background: coral;
        position: static;
        width: 48px;
        height: 48px;
        left: 0px;
        top: 0px;

        /* Inside Auto Layout */

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
        margin: 0px 0px;
      }

      .nav-links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 144px;

        left: 48px;
        top: 0px;


        /* Inside Auto Layout */

        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 1;
        margin: 0px 0px;
      }

          .nav-link {
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-items: center;
            align-content: center;
            justify-content: center;

            position: static;
            width: 141px;
            height: 48px;
            left: 1587px;
            top: 0px;

            font-family: Work Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 56px;

            color: #F5D5E0;


            /* Inside Auto Layout */

            flex: none;
            order: 3;
            align-self: stretch;
            flex-grow: 0;
            margin: 0px 0px;
          }

    .content {
      grid-area: site;
      /* Auto Layout */

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;

      position: static;
      width: 100%;
      height: 100%;
      left: 0px;
    }

      .namebox {
        /* Auto Layout */

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;

        position: static;
        width: 650px;
        height: 200px;

        background: #7B337D;
        border: 3px solid #000000;
        box-sizing: border-box;
        border-radius: 100px;
        border-collapse: separate;

        /* Inside Auto Layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 0px;
      }

        .name {
          position: static;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-items: center;
          align-content: center;
          justify-content: center;
          width: 100%;
          height: 100%;

          font-family: Seaweed Script;
          font-style: normal;
          font-weight: normal;
          font-size: 216px;
          line-height: 293px;

          color: #FFFFFF;

          text-shadow:
            -2px -2px 0 #000,  
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            10px 4px 4px rgba(0, 0, 0, 0.25);

          /* Inside Auto Layout */

          flex: none;
          order: 0;
          align-self: stretch;
          justify-self: stretch;
          flex-grow: 1;
          margin: 0px 0px;
        }

</style>
