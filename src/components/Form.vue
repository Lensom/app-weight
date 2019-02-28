<template>
    <form action="#" method="get" id="contactForm">
		<input type="text" name="email" id="email" placeholder="Email">
		<input type="text" name="password" id="password" placeholder="Password">
		<div class="g-signin2" data-onsuccess="onSignIn"></div>
		<button type="submit" id="btnLogIn">Войти</button>
		<button type="submit" id="btnSignUp">Зарегистрироваться</button>
		<button type="submit" id="btnLogOut" class="hide">Выйти</button>
	</form>  
</template>


<script>
export default {
  name: 'Form',
  props: {
    
  }
}

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
  var getEmail = document.getElementById('get-input');
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
      btnLogIn.classList.add('hide');
      btnSignUp.classList.add('hide');
      userId = firebaseUser.uid;  
      console.log(firebaseUser.email, firebaseUser.uid, firebaseUser.password);
      // Получаем email user'a и пишем в p
      getEmail.innerHTML = firebaseUser.email;
    } else {
      console.log('not logged in');
      btnLogOut.classList.add('hide');
      btnLogIn.classList.remove('hide');
      btnSignUp.classList.remove('hide');      
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
    
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          userId = firebaseUser.uid;
          firebase.database().ref('/users/' + userId).set({
            email: email,
            password: password,
            id: userId
          });
        }      
    });

  });

  // Sign Out
  btnLogOut.addEventListener('click', e => {
    e.preventDefault();
    firebase.auth().signOut();
    userId = '';
    getEmail.innerHTML = '';
    console.log(userId);
  });


  // Вывод данных всех пользователей.
  userDB.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });


  // google enter
  
  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); 
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); 
  // }

  // function signOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }
  

  
});



</script>