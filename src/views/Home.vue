<template>
  <div class="content">
    <div class="namebox">
      <div class="name">Anastasia</div>
    </div>
  </div>
</template>

<script>
export default {
	setup() {
		
	},
}
</script>

<style>
  .content {
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
