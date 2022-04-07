<template>
    <div>
        <!-- <SongCard v-for="(song,i) in SongsList" :key="i" :song="song"/> -->
        <SongCard v-for="(song,i) in $store.state.SongsList" :key="i" :song="song"/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SongCard from './SongCard.vue'
import store from "../store";
import { mapGetters } from "vuex";

@Options({
    name:"SongsList",
    components:{
        SongCard
    },
    computed:{
        ...mapGetters({
            songsLits:store.getters.songsLits
        })
    }
})

export default class SongList extends Vue {  
  public SongsList=[{explicit:true,title_short:"calladita",artist_name:"bad bunny",album_image:"https://e-cdns-images.dzcdn.net/images/cover/09300ef46a2b5e5cffb116a5bda516b1/250x250-000000-80-0-0.jpg",artist_image:"https://e-cdns-images.dzcdn.net/images/artist/e8f8661f4849c1d75da4934a47702543/120x120-000000-80-0-0.jpg",link:"https://www.deezer.com/es/artist/154297772",preview:"https://cdns-preview-5.dzcdn.net/stream/c-5e01fd3d87547ef4b3d5532a90c05a85-3.mp3"},
  {explicit:true,title_short:"calladita",artist_name:"bad bunny",album_image:"https://e-cdns-images.dzcdn.net/images/cover/09300ef46a2b5e5cffb116a5bda516b1/250x250-000000-80-0-0.jpg",artist_image:"https://e-cdns-images.dzcdn.net/images/artist//120x120-000000-80-0-0.jpg",link:"https://www.deezer.com/es/artist/154297772",preview:"https://cdns-preview-5.dzcdn.net/stream/c-5e01fd3d87547ef4b3d5532a90c05a85-3.mp3"}]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
