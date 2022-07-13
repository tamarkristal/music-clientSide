
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import BackButton from '../../components/BackButton';
import { useState } from 'react';
import './AddSong.css'
import { useNavigate } from 'react-router-dom';
import { SongModel } from '../../models/SongModel';
import {Genre} from '../../models/SongModel'
export default function AddSong(prop:any): JSX.Element {
  const navigate = useNavigate()
  const [newSong, setNewSong] = useState<SongModel>({
    title: "",
    artist: "",
    length: 0,
    price: 0,
    genre: 'POP'
  })
  const genreArr = ['POP', 'ROCK', 'CLASSICAL', 'RAP']
  return (
    <>
    <div className='add-song'>
      <h1>Add Song</h1>
      <div className="inputText">
      <TextField
        id="outlined-text"
        label="Artist name"
        type="text"
        variant="filled"
        sx={{
          backgroundColor: 'rgba(254, 254, 254, 0.877)',
          ":hover":{background:'rgba(254, 254, 254, 0.877)'}
      }}
        onChange={(val) => setNewSong({ ...newSong, artist: val.target.value })}
      />
      <br></br>
      <TextField
        id="outlined-text"
        label="Title"
        type="text"
        variant="filled"    sx={{
          backgroundColor: 'rgba(254, 254, 254, 0.877)',
          ":hover":{background:'rgba(254, 254, 254, 0.877)'}
      }}
        onChange={(val) => setNewSong({ ...newSong, title: val.target.value })}
      /><br></br>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          defaultValue={''}    sx={{
            backgroundColor: 'rgba(254, 254, 254, 0.877)',
            ":hover":{background:'rgba(254, 254, 254, 0.877)'}
        }}
          onChange={(val) => { setNewSong({ ...newSong, genre: val.target.value  as Genre}) }}
        >
                {genreArr.map((genre: string) => { return <MenuItem key={genre} value={genre}>{genre}</MenuItem> })}

        </Select>
      </FormControl>
      <br></br>
      <TextField
        id="outlined-number"
        label="Price"
        type="number"
        variant="filled"    sx={{
          backgroundColor: 'rgba(254, 254, 254, 0.877)',
          ":hover":{background:'rgba(254, 254, 254, 0.877)'}
      }}
        onChange={(val) => setNewSong({ ...newSong, price: parseFloat(val.target.value) })}
      />
      <br></br>
      <TextField
        id="outlined-number"
        label="Length"
        type="number"
        variant="filled"    sx={{
          backgroundColor: 'rgba(254, 254, 254, 0.877)',
          ":hover":{background:'rgba(254, 254, 254, 0.877)'}
      }}
        onChange={(val) => setNewSong({ ...newSong, length: parseInt(val.target.value) })}
      />
      <br></br> </div>
      <Button onClick={()=>{prop.addSongFunc(newSong);navigate('/songs')}} variant="outlined" size="small" >Add Song</Button>
      <br></br>
      <BackButton></BackButton>
      </div>
    </>
  );

}