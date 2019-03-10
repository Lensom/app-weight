<template>

<div class="contact">  
	<Form></Form>
  <div class="links">
    <ul>
        <router-link 
        v-for="item in items"
        :key="item.title"
        tag="li"
        class=""
        v-bind:to="item.url"
        active-class="active"
        exact>
        <a class="v-link">{{ item.title }}</a>
      </router-link>
    </ul>
  </div>
</div>


</template>

<script>

import Form from '../components/Form.vue'
import Menu from '../components/Menu.vue'

export default {
  name: 'Welcome',
  components: {
    Form,
    Menu
  },
  computed: {
    items () {
      return this.$store.getters.subitems
    }
  },
}
</script>

<style>
#app {
  background-image: url(../assets/img/plain-wallpaper-hd.jpg)
}

.links ul {
  position: absolute;
  bottom: 16px;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
}

.links li {
  display: inline-block;
}

.links li a {
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 500;
}



</style>