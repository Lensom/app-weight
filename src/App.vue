<template>
  <div id="app">


    <nav>
      <ul>
        <li>
        <router-link to="/">Welcome</router-link>
        </li>
        <li>
        <router-link :to="'/main'">MainPage</router-link>
        </li>
        <li>
        <router-link :to="'/settings'">Settings</router-link>
        </li>
      </ul>
    </nav>
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*::-webkit-input-placeholder,
*:-moz-placeholder,
*::-moz-placeholder,
*:-ms-input-placeholder {
  color: #666;
  opacity: 1;
}
body input:focus:required:invalid,
body textarea:focus:required:invalid {
  color: #666;
}
body input:required:valid,
body textarea:required:valid {
  color: #666;
}
html,
body {
  height: 100%;
}
body {
  font-size: 16px;
  min-width: 320px;
  position: relative;
  line-height: 1.65;
  font-family: "RobotoBold", sans-serif;
  overflow-x: hidden;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
.hide {
  display: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
}

ul li {
  display: inline-block;
  padding: 0 10px;
}

</style>
