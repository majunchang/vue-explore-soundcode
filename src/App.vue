<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1 @click="handleClick">哈哈哈</h1>
    <h1 @click="handleClick">{{majunchang}}</h1>
    <h1 @click="handleClick">{{majunchang}}</h1>
    <h1 @click="handleClick">{{test}}12</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      majunchang:'1241213',
      test:'127',
      arr:'123',
    }
  },
  methods: {
    handleClick() {
      this.test = '123';
      this.majunchang = '123';
      this.arr = '1'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
