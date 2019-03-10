<template>
  <v-app>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>          
          <img class="logotype" src="../assets/img/logotype3.png" alt="Nasti">
          <v-card>
            <v-card-text>
              <v-form v-model="valid" autocomplete="off" ref="form" method="get" id="contactForm" class="contactform" validation>
                <v-text-field
                  id="email"
                  prepend-icon="person"
                  name="email"
                  label="E-mail"
                  type="email"
                  v-model="email"
                  :rules="emailRules">
                </v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Пароль"
                  type="password"
                  :counter="16"
                  v-model="password"
                  :rules="passwordRules">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <!-- <v-btn class="btn btn-signup" id="btnSignUp" @click.stop.prevent="signUp">Зарегистрироваться</v-btn> -->
              <!-- <v-spacer></v-spacer> -->
              <v-btn class="btn btn-login" id="btnLogIn"  @click.stop.prevent="Login" :disabled="!valid">Войти</v-btn>
              <v-btn class="btn btn-logout hide" id="btnLogOut" @click="LogOut">Выйти</v-btn>
            </v-card-actions>
          </v-card>          
        </v-flex> 
      </v-layout>
    </v-container>
  </v-content>
  </v-app>
</template>


<script>


// Values
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const config = {
  apiKey: "AIzaSyC8uAkogadaolsruNReqWUDAW0UHOssz5A",
  authDomain: "vue-weight.firebaseapp.com",
  databaseURL: "https://vue-weight.firebaseio.com",
  projectId: "vue-weight",
  storageBucket: "vue-weight.appspot.com",
  messagingSenderId: "64244034820"
};

firebase.initializeApp(config);

const userDB = firebase.database().ref();
const auth = firebase.auth();
var userId;

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogOut.classList.remove('hide');
      btnLogIn.classList.add('hide');
      // btnSignUp.classList.add('hide');
      userId = firebaseUser.uid;  
      console.log(firebaseUser.email, firebaseUser.uid, firebaseUser.password);
      // router.push('main') router is not found

    } else {
      console.log('not logged in');
      btnLogOut.classList.add('hide');
      btnLogIn.classList.remove('hide');
      // btnSignUp.classList.remove('hide');      
    }
  });

  userDB.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });

export default {
  name: 'Form',  
  data () {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [
        (v) => !!v || 'E-mail обязательное поле',
        (v) => emailRegex.test(v) || 'E-mail должен быть заполнен'
      ],
      passwordRules: [
        (v) => !!v || 'Пароль обязательное поле',
        (v) => v && v.length >= 6 || 'Пароль должен содержать не менее 6 символов'
      ]
    }
  },
  methods: {
    Login(e) {
      console.log(email.value)
      console.log(password.value)
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => console.log(e.message));
      
    },
    signUp(e) {
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise
      .then(user => console.log(user))
      .catch(e => console.log(e.message));  
      
      
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if (firebaseUser) {
            userId = firebaseUser.uid;
            firebase.database().ref('/users/' + userId).set({
              email: email.value,
              password: password.value,
              id: userId
            });
          }      
      });
    },
    LogOut: function() {
      this.$store.commit('LogOut');
    }
  }
}

</script>

<style>

.logotype {
  width: 40%;
  margin: 0 auto;
  margin-top: -50px;
  margin-bottom: 40px;
}

.contactform .primary--text {
  color: #ee9ca7 !important;
  caret-color: #ee9ca7 !important;
}

.v-card {
  box-shadow: none;
}

.theme--light.v-counter {
  color: #fff;
}

.theme--light.v-sheet {
  background: transparent;
}

.theme--light.v-icon {
  color: #fff;
}

.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: #fff;
}

.theme--light.v-label {
  color: #fff;
}

.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #fff;
}

.v-btn__content {
  color: #fff;
}

.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: #370286;
}

.btn {
  background-color: #3a1c71;
  background-color: #fff;
  /* background-image: linear-gradient(220deg, #3a1c71 0%, #753a88  100%); */
  color: #fff;
}


.v-card__actions .btn.btn-logout, 
.v-card__actions .btn.btn-signup,
.v-card__actions .btn.btn-login {
  margin: 0 auto;
}

</style>
