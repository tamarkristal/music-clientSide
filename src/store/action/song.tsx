import { SongModel } from "../../models/SongModel"

export function addSongDis(newSong: SongModel) {
    return {type: 'ADD_SONG',payload: newSong}
}
export function deleteSongDis(id: string) {
    return { type: 'DELETE_SONG', payload: id }
}
export function editSongDis(editSong: SongModel) {
    return { type: 'EDIT_SONG', payload: editSong }
}
export function getSongsDis(songs: SongModel[]) {
    return { type: 'GET_SONGS', payload: songs }
}
export function getByIdDis(song:SongModel){
    return {type:'GET_BY_ID',payload:song}
}