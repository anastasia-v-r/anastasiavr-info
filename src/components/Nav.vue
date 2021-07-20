<template>
  <div class="nav">
  	<div class="logo">
  		<router-link to="/">
  			<img src="@/assets/wolf.svg" alt="Site Logo" width="48" height="48">
  		</router-link>
		</div>
		<div class="nav-links">
			<router-link class="nav-link" style="order: 0" to="/about">About</router-link>
			<router-link class="nav-link" style="order: 1" to="/crafts">Crafts</router-link>
			<router-link class="nav-link" style="order: 2" to="/programs">Programs</router-link>
			<router-link class="nav-link" style="order: 3" to="/social">Social</router-link> 
		</div>  
	</div>    
</template>

<script>
export default {

}

</script>

<style scoped>
.nav {
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

  background: #7B337D;
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
</style>