<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ desc }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['desc'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

h2 {
  color: #42b983;
}
</style>
