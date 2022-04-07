<template>
<div style="display: flex; flex-direction:column;align-items: flex-start">
    <div class="song-box">
        <div class="image-box">
            <div>
                <img :src="song.album_image" style="padding-top:10px"/>
            </div>
                <h6 style="color: rgb(255 63 63); margin-top:0px;margin-bottom:0px; padding-left:10px;padding-top:248px">{{song.explicit?"explicit":""}}</h6>    
            </div>

        <div>
        <div>
            <h2 style="padding-right:20px">{{ song.title_short}}</h2>
            <div class="artist-box">
                <img :src="song.artist_image"/>
                <a :href="song.artist_link" >{{song.artist_name}}</a>
            </div>
        </div>
        </div>
            <div class="audio-box" v-if="song.preview">

                <video controls style="margin-bottom: 20px"><source :src="song.preview" type="audio/mpeg"/></video>
            </div>
    </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name:"SongCard",
    props:["song"]
})

export default class SongCard extends Vue {  

  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-box{
    display: flex;
    flex-direction: row;
}
.audio-box{
    padding-left: 10px;
    height: 110px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}
.artist-box{
    padding-top: 60px;
    display: flex;
    justify-content: center;
    flex-direction: row;
}
.artist-box img{
    border-radius: 100%;
    width: 20%;
}
.artist-box a{
    display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  margin-left: 10px;
}
.song-box{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    border-bottom: 1px rgb(169, 169, 169) solid;
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
