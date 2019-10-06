<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="shows">button</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
      isshow:Boolean,
    },
    methods:{
      shows(){
        console.log("h")

        this.$emit("up",false)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
