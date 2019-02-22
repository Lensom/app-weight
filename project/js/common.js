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
  var userId;

  // Add login event
  btnLogin.addEventListener('click', e => {
    e.preventDefault();
    let email = txtEmail.value;
    let password = txtPassword.value;

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

 });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogOut.classList.remove('hide');
      userId = firebaseUser.uid;  
    } else {
      console.log('not logged in');
      btnLogOut.classList.add('hide');
    }
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
    
    // function save user to db
    firebase.database().ref('/users/' + userId).push({ email: email, password: password, id: userId});

  });

  // Sign Out

  btnLogOut.addEventListener('click', e => {
    e.preventDefault();
    firebase.auth().signOut();
    userId = '';
    console.log(userId)
  });

  
});


