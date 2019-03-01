<template>
  <nav>
    <ul>
      <router-link tag="li" class="" exact to="/" active-class="active">
        <a>Welcome</a>
      </router-link>
      <router-link tag="li" class="" to="/main" active-class="active">
        <a>MainPage</a>
      </router-link>
      <router-link tag="li" class="" to="/settings" active-class="active">
        <a>Settings</a>
      </router-link>
    </ul>
  </nav>

</template>

<script>
export default {
  name: 'Menu'
}
</script>