<template>
  <div>
    <Form model="grid" @submit.prevent="search">

    <input type="text" class="input-artist" placeholder="Buscar Artista..." v-model="artistName"/>
    <button type="submit" class="button-buscar" >{{$t("message.search")}}</button>
    </Form>
    <div> 
      <SongsList/>
    </div>
    <button class="button-next" v-if="$store.state.next>15" @click="prev" >{{$t("message.prev")}}</button>
    <button class="button-next" v-if="$store.state.next>15" @click="next">{{$t("message.next")}}>></button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "../store";
import SongsList from "./SongsList.vue"
@Options({
  components:{
    SongsList
  },
  methods:{
  
    next(){
      store.dispatch("goNext","next")
    },
     prev(){
      store.dispatch("goNext","prev")
    }
  },
})

export default class HomePage extends Vue {
  public artistName= "";

 
  public search():void{
    store.dispatch("setSongs",this.artistName);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-next{
  background-color: transparent;
  border: none;
  color: rgb(112, 112, 255);
  cursor: pointer;
}
.button-buscar{
  padding: 10px;
  color: #fff;
  border-radius: 0px 4px 4px 0px;
  border: 1px rgb(86, 179, 255) solid ;
  background-color: rgb(86, 179, 255);
  cursor: pointer;
}
.input-artist{
  padding: 10px;
  border: 1px rgb(86, 179, 255) solid !important;
  border-radius: 4px 0px 0px 4px;
  background-color: transparent;
}
.input-artist:focus{
  outline: none;
  border: 2px rgb(86, 179, 255) solid !important;
}
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
