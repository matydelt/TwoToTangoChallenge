<template class="mainPage">
<div class="mainPage">
  <HomePage />
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomePage from './components/HomePage.vue';

@Options({
  components: {
    HomePage,
  },
})
export default class App extends Vue {}
</script>

<style>
.mainPage{
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
  background-color: #eae9e9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
}
</style>
