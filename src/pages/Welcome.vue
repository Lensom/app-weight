<template>

<div class="contact">  
	<Form></Form>
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
  }
}
</script>

<style>
#app {
  background-image: url(../assets/img/plain-wallpaper-hd.jpg)
}

</style>