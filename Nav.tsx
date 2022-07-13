import {Link} from 'react-router-dom'
export default function Nav(){
return(
    <>
    <nav>
        <Link to='EditSong'>עדכון שיר</Link>
        <Link to='AddSong'> הוספת שיר</Link>
    </nav>
    </>
)
}