<template>
  <nav>
    <ul>
      <router-link 
        v-for="item in items"
        :key="item.title"
        @click=""
        tag="li"
        class=""
        v-bind:to="item.url"
        active-class="active"
        exact>
        <v-icon left>{{ item.icon }}</v-icon>
        <a class="v-link">{{ item.title }}</a>
      </router-link>
      <a class="v-link" id="btnLogOut">Exit</a>
    </ul>
  </nav>

</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      items: [
        { title: 'Welcome', icon: 'dashboard', url: '/' },
        { title: 'MainPage', icon: 'home', url: '/main' },
        { title: 'Settings', icon: 'settings', url: '/settings' },
        { title: 'Exit', icon: 'exit_to_app', url: '/'}
      ],
      right: null
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
  .v-link {
    text-decoration: none;
  }

</style>