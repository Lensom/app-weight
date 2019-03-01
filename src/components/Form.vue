<template>
  <v-app>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>          
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Форма входа</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form method="get" id="contactForm">
                <v-text-field id="email" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" id="btnSignUp">Зарегистрироваться</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" id="btnLogIn">Войти</v-btn>
              <v-btn color="primary" id="btnLogOut">Выйти</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  </v-app>
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

  
  
});

</script>

