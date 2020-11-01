<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <h1 @click="handleClick">哈哈哈</h1>
    <h1 @click="handleClick">{{ majunchang }}</h1>
    <h1 @click="handleClick">{{ test }}12</h1>
    <HelloWorld :desc="desc"></HelloWorld>
    <div id="demo">{{ firstName }}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
const App = {
  name: 'App',
  data() {
    return {
      majunchang: '1241213',
      test: '127',
      desc: 'this is component',
      fullName: 'Bar',
      firstName: 'abc',
    };
  },
  components: {
    HelloWorld,
  },
  watch: {
    // firstName: function (val) {
    //   this.fullName = val + ' ' + this.majunchang;
    // },
    firstName: {
      handler: function (val) {
        this.fullName = val + ' ' + this.majunchang;
      },
      deep: true,
    },
  },
  methods: {
    handleClick() {
      this.test = '123';
      // this.majunchang = '123';
      // this.arr = '1';
      this.firstName = '前缀';
    },
  },
};

console.log('App--');
console.log(App);
export default App;
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
