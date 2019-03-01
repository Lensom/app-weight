<template>

<div class="contact">
  <Menu></Menu>
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