export default {
  state: {
    userId: ''
  },
  mutations: {  
    LogOut: state => {
      firebase.auth().signOut();
      state.userId = '';
    }      
  },
  actions: {      
  },
  getters: {
    user (state) {
      return state.user;
    }
  }
}