<template>

    <v-app>
      <v-navigation-drawer app permanent v-model="drawer">
        <Menu></Menu>
      </v-navigation-drawer>
      <v-content>
        <h1>Main page</h1>  
        <router-view></router-view>
      </v-content>
    </v-app>

</template>

<script>

import Menu from '../components/Menu.vue'

export default {
  name: 'MainPage',
  components: {
    Menu
  },
  data: () => ({
    drawer: true
  })

}
</script>