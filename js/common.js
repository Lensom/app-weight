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
  const userDB = firebase.database().ref();
  const auth = firebase.auth();

  // Get values
  var txtEmail = document.getElementById('email');
  var txtPassword = document.getElementById('password');
  var btnLogin = document.getElementById('btnLogIn');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogOut = document.getElementById('btnLogOut');
  var userId = '';

  // Add login event
  btnLogin.addEventListener('click', e => {
    e.preventDefault();
    let email = txtEmail.value;
    let password = txtPassword.value;

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

 });

  // Sign Up event

  btnSignUp.addEventListener('click', e => {
    e.preventDefault();
    let email = txtEmail.value;
    let password = txtPassword.value;
    
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
    .then(user => console.log(user))
    .catch(e => console.log(e.message));

    saveUser(email, password);
    
  });

  // Sign Out

  btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut();
  });


  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      btnLogOut.classList.remove('hide')
      console.log(firebaseUser);
      console.log(firebaseUser.uid);
      userId = firebaseUser.uid;
    } else {
      console.log('not logged in');
      btnLogOut.classList.add('hide')
    }
  });

  // Add user to Database

  function saveUser(email, password, userId) {
    firebase.database().ref('/users/' + userId).push({ email: email, password: password, id: userId});
  }

});


