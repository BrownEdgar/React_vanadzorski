// 
// 1. create Select with movies title, and save value in STATE
// 3. render selected Movie
// 


import { useState } from 'react';
import './Test.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons'

const topMovies = [
  { id: 1, title: "The Shawshank Redemption", rate: 9.3, budget: 25, genre: "Drama", year: 1994 },
  { id: 2, title: "The Godfather", rate: 9.2, budget: 6, genre: "Crime", year: 1972 },
  { id: 3, title: "The Dark Knight", rate: 9.0, budget: 185, genre: "Action", year: 2008 },
  { id: 4, title: "The Godfather Part II", rate: 9.0, budget: 13, genre: "Crime", year: 1974 },
  { id: 5, title: "12 Angry Men", rate: 9.0, budget: 0.35, genre: "Drama", year: 1957 },
  { id: 6, title: "Schindler's List", rate: 8.9, budget: 22, genre: "Biography", year: 1993 },
  { id: 7, title: "The Lord of the Rings: The Return of the King", rate: 8.9, budget: 94, genre: "Fantasy", year: 2003 },
  { id: 8, title: "Pulp Fiction", rate: 8.9, budget: 8, genre: "Crime", year: 1994 },
  { id: 9, title: "The Good, the Bad and the Ugly", rate: 8.8, budget: 1.2, genre: "Western", year: 1966 },
  { id: 10, title: "Fight Club", rate: 8.8, budget: 63, genre: "Drama", year: 1999 },
  { id: 11, title: "Forrest Gump", rate: 8.8, budget: 55, genre: "Drama", year: 1994 },
  { id: 12, title: "Inception", rate: 8.8, budget: 160, genre: "Sci-Fi", year: 2010 },
  { id: 13, title: "The Lord of the Rings: The Fellowship of the Ring", rate: 8.8, budget: 93, genre: "Fantasy", year: 2001 },
  { id: 14, title: "Star Wars: Episode V - The Empire Strikes Back", rate: 8.7, budget: 18, genre: "Sci-Fi", year: 1980 },
  { id: 15, title: "The Matrix", rate: 8.7, budget: 63, genre: "Sci-Fi", year: 1999 },
  { id: 16, title: "Goodfellas", rate: 8.7, budget: 25, genre: "Crime", year: 1990 },
  { id: 17, title: "One Flew Over the Cuckoo's Nest", rate: 8.7, budget: 4.4, genre: "Drama", year: 1975 },
  { id: 18, title: "Se7en", rate: 8.6, budget: 33, genre: "Thriller", year: 1995 },
  { id: 19, title: "Seven Samurai", rate: 8.6, budget: 2, genre: "Action", year: 1954 },
  { id: 20, title: "Interstellar", rate: 8.6, budget: 165, genre: "Sci-Fi", year: 2014 }
];
const keys = Object.keys(topMovies[0])

function Test() {
  const [movies, setMovies] = useState(topMovies);
  const [selectedMovieId, setselectedMovieId] = useState(-1);

  const handleChange = (e) => {
    setselectedMovieId(+e.target.value)
  }

  const movie = movies.find(elem => elem.id === selectedMovieId)
  const handleSort = (field) => {
    setMovies((prev) => {

      return prev.toSorted((a, b) => {
        if (typeof a[field] === 'number') {
          return a[field] - b[field]
        }
        return a[field].localeCompare(b[field])
      })
    })
  }

  return (
    <div className='Test'>
      <select name="mainSelect" id="mainSelect" defaultValue='' onChange={handleChange}>
        <option value="" selected disabled></option>
        {
          movies.map(elem => <option value={elem.id} key={elem.id}>{elem.title}</option>)
        }
      </select>
      {
        (selectedMovieId !== -1 && movie) && (
          <div className="movie">
            <h1>{movie.title}</h1>
            <ul>
              <li>rate: {movie.rate}</li>
              <li>year: {movie.year}</li>
              <li>genre: {movie.genre}</li>
              <li>budget: {movie.budget}M</li>
            </ul>
          </div>
        )
      }
      <table>
        <thead>
          <tr>
            {keys.map(field => <th key={field}>
              {field}
              <span role="icon" onClick={() => handleSort(field)}>
                <FontAwesomeIcon icon={faSort} />
              </span>
            </th>)}
          </tr>
        </thead>
        <tbody>
          {
            movies.map(elem => {
              return (
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.title}</td>
                  <td>{elem.rate}</td>
                  <td>{elem.budget}M</td>
                  <td>{elem.genre}</td>
                  <td>{elem.year}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Test;
