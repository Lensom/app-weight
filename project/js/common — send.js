$(document).ready(function() {
   
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8uAkogadaolsruNReqWUDAW0UHOssz5A",
    authDomain: "vue-weight.firebaseapp.com",
    databaseURL: "https://vue-weight.firebaseio.com",
    projectId: "vue-weight",
    storageBucket: "vue-weight.appspot.com",
    messagingSenderId: "64244034820"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var user = firebase.database().ref();


  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();
    // Get values
    var email = getInputVal('email');
    var password = getInputVal('password');

    // Save user 
    saveUser(email, password);
    
  };
  
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  function saveUser(email, password) {
    var newUser = user.push();
    newUser.set({
      email: email,
      password: password
    });
  }

});


