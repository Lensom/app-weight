export default {
  state: {
    subitems: [{
        title: 'Регистрация',
        url: '/registration'
      },
      {
        title: 'Забыли пароль?',
        url: '/forgotPassword'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    subitems(state) {
      return state.subitems
    }
  }
}