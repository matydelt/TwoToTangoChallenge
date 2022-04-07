import axios from 'axios';
import { createStore } from 'vuex'
import {  Datai, SongData, Songs, State } from './types';

export default createStore<State>({
  state: {
    SongsList: [],
    SongsFiltered: [],
    next:"",
    prev:""
  },
  getters: {
    songsLits(state: State){
      return state.SongsList
    }
  },
  mutations: {
    setSongs(state, payload: Songs[]) {
      return state.SongsList = payload
    },
    setNext(state,payload:string){
      return state.next=payload
    }

  },
  actions: {
    async setSongs({ commit }, payload: string) {
      let url = `https://api.deezer.com/search?q=${payload}`;
      // const url=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${payload}`
      if(payload==="next"){
        url = this.state.next;
        this.state.prev=url;
      }
      if(payload==="prev"){
        url = this.state.prev;
      }
      const headers={
        "Access-Control-Allow-Headers":'Access-Control-Allow-Origin',
          'Access-Control-Allow-Origin': 'http://localhost:8080/',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      try{
        const res:Datai = (await axios.get(url,{headers}))
        console.log(res.data.data)
        const result:Songs[]=res.data.data.map(function (e:SongData):Songs{          
          return {title_short:e.title_short,album_image:e.album.cover_medium,artist_name:e.artist.name,explicit:e.explicit_lyrics,artist_link:e.artist.link,artist_picture:e.artist.picture}
        })
       
        commit("setNext",res.next)
        return commit("setSongs",result);
      }catch(e){
        console.log(e)
      }    
    },
  }
})
