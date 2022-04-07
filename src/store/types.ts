export interface Artist {
    name: string,
    picture:string,
    link:string
}
export interface Album {
    cover_medium: string
}
export interface SongData {
    artist: Artist
    album: Album
    title_short: string
    explicit_lyrics: boolean
}
export interface Songs {
    title_short: string,
    album_image: string,
    artist_name: string,
    explicit: boolean,
    artist_link:string,
    artist_picture:string
}
export interface State {
    SongsList: Songs[],
    SongsFiltered: Songs[]
    next:string,
    prev:string
}

export interface Data{
    data:SongData[],
    
    total:Int16Array
}
export interface Datai{
    data:Data,
    next:string,
}
