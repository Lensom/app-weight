<template>

<div class="contact">
	<Form></Form>
	<!-- <a href="#" onclick="signOut();">Sign out</a> Google sign out -->

	<p id="get-input"></p>
</div>

</template>

<script>

import Form from '../components/Form.vue'

export default {
  name: 'Welcome',
  components: {
    Form
  }
}
</script>