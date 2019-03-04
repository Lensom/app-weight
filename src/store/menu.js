export default {
  state: {
    items: [
      { title: 'Welcome', icon: 'dashboard', url: '/' },
      { title: 'MainPage', icon: 'home', url: '/main' },
      { title: 'Settings', icon: 'settings', url: '/settings' },
      { title: 'Exit', icon: 'exit_to_app', url: '/'}
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    items (state) {
      return state.items
    }
  }
}