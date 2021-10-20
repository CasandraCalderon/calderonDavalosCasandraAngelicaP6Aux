import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const StartWars = () => {
  
    const [films, setFilms] = useState([]);
    const [values, setValues] = useState(0);

    useEffect(() => {
        getFilms();
        
    }, [])
 
    const getFilms = async () => {
        const resp = await axios.get('https://swapi.dev/api/films')
        setFilms(resp.data.results);
    }
    

    return (
        <div className="mt-5">
            <div className="text-center">
            <hr />
                <h1>Star Wars Films</h1>
                <hr />
                <button type="button" className="btn btn-warning" onClick={()=>{setValues(values+1)}}>CLICK</button>
                <hr />
            </div>
            {values < films.length ? (<table className="table">
                <thead>
                    <tr>
                        <th>Tittle</th>
                        <th>Opening Crawl</th>
                        <th>Release date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={films.title}>
                        <td>{films[values].title}</td>
                        <td>{films[values].opening_crawl}</td>
                        <td>{films[values].release_date}</td>
                    </tr>
                    
                </tbody>
            </table>) : ''}
            
        </div>
    )
}
export default StartWars;