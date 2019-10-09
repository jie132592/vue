<template>
  <div class="hello">
    <h2>我是从页面上获取的值{{this.$store.state.count}}</h2>
    <h2>我是从getter上获取的计算的值{{this.$store.getters.getStateCount}}</h2>

    <p>count的值 {{this.$store.state.count}}</p>
    <button @click="addFun">+</button>
    <button @click="reduceFun">-</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    addFun() {
      this.$store.dispatch('addFun')
      //this.$store.commit("add");
    },
    reduceFun() {
      let n = 5
      this.$store.dispatch('reduceFun',n)
      //this.$store.commit("reduce");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
