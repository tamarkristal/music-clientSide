import { Routes, Route, Navigate } from 'react-router-dom'
import SongsLandingPage from './pages/songsLandingPage/SongsLandingPage'
import AddSong from './pages/addSong/AddSong'
import EditSong from './pages/editSong/EditSong'
import { useSelector } from 'react-redux'
import { RootState } from '.'
import  type{ } from 'redux-thunk/extend-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { SongModel } from './models/SongModel'
import { addSongThunk, deleteSongThunk, editSongThunk, getAllSongsThunk, getByIdThunk, getSongByArtistThunk } from './api/songs.api'
import { redurcerSong } from './store/reducer/song'
export default function Routers() {
  const dispatch = useDispatch();
  const songs: SongModel[] = useSelector<RootState, redurcerSong>((state) => state.songReducer).listSong
  useEffect(() => {
    getAllSongs();
  }, [])
  const addNewSong = async (newSong: SongModel) => {
    dispatch(addSongThunk(newSong));
  }
  const editSong = async (values: SongModel, id: string) => {
    dispatch(editSongThunk(values,id ));
  }
  const deleteSong = async (id: string) => {
    dispatch(deleteSongThunk(id));
  }
  const SongsByArtist = async (artist: string) => {
    dispatch(getSongByArtistThunk(artist))
  }
  const getAllSongs = async () => {
    dispatch(getAllSongsThunk())
  }
  const getById= async (id:string) => {
    dispatch(getByIdThunk(id))
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='songs'></Navigate>}></Route>
        <Route path='/songs'>
          <Route path='/songs/edit/:id' element={<EditSong songsProp={songs } editSong={editSong} getById={getById} />}></Route>
          <Route path='/songs/add' element={<AddSong addSongFunc={addNewSong} />}></Route>
          <Route path='/songs' element={<SongsLandingPage songsProp={songs} getAllSongs={getAllSongs} deleteSong={deleteSong} getSongByArtist={SongsByArtist} />}></Route>
        </Route>
      </Routes>
    </>)
}