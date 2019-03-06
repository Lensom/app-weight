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
      <a class="v-link">Exit</a>
      <!-- <a class="v-link" @click="LogOut">Exit</a> -->
    </ul>
  </nav>

</template>

<script>

export default {
  name: 'Menu',
  computed: {
    items () {
      return this.$store.getters.items
    }
  },
  methods: {
    LogOut: function() {
      this.$store.commit('LogOut');
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