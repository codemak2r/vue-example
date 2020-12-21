<template>
  <div id="app">
    <!--BasicButton />
    <InputForm /-->
    <MultiForm />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BasicButton from "./components/BasicButton.vue"
// import InputForm from "./components/InputForm.vue"
import MultiForm from "./components/MultiForm.vue"

export default {
  name: 'App',
  components: {
    // HelloWorld
    // BasicButton,
    // InputForm,
    MultiForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
