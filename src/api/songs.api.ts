import axios from "axios"
import { SongModel } from "../models/SongModel";
import { addSongDis, deleteSongDis, editSongDis, getByIdDis, getSongsDis } from "../store/action/song";



export const addSongThunk = (song: SongModel) => {
    return async (dispatch: any) => {
        try {
         
            const res = await axios.post('http://localhost:8080/songs', song, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(addSongDis(res.data));
        }
        catch (err) {
            return err;
        }
    }
}
export const getAllSongsThunk = () => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get('http://localhost:8080/songs');
            
            dispatch(getSongsDis(res.data));
        }
        catch (err) {
            return err;
        }
    }
}
export const getSongByArtistThunk = (artist: string) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(`http://localhost:8080/songs/Artist/${artist}`);
            dispatch(getSongsDis(res.data));
        }
        catch (err) {
            return err;
        }
    }
}
export const deleteSongThunk = (id: string) => {
    return async (dispatch: any) => {
        try {
            await axios.delete(`http://localhost:8080/songs/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(deleteSongDis(id));
        }
        catch (err) {
            return err;
        }
    }
}
export const editSongThunk = (song: SongModel, id: string) => {
    return async (dispatch: any) => {
        try {
            await axios.put(`http://localhost:8080/songs/${id}`, song,{
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            dispatch(editSongDis(song));
        }
        catch (err) {
            return err;
        }
    }
}
export const getByIdThunk = (id: string) => {
    return async (dispatch: any) => {
        try {
           
            let path = `http://localhost:8080/songs/${id}`
            const res = await axios.get(path)
            dispatch(getByIdDis(res.data))
            return res.data;
        } catch (error) {
            return error;
        }
    }
}
