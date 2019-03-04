export default {
  state: {
    userId: ''
  },
  mutations: {    
  },
  actions: {  
    // LogOut(state) {
    //   firebase.auth().signOut();
    //   state.userId = '';
    //   console.log(userId);
    //   window.location.href = "/";
    // }  
  },
  getters: {
    user (state) {
      return state.user;
    }
  }
}