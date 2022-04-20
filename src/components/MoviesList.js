import React from 'react'
import {Link} from 'react-router-dom'

export default function MoviesList({movies}) {
    const renderMovies = Object.keys(movies).map((movieID)=>{
        <li key={movieID}>
            <Link to = {`/movies/${movieID}`}></Link>{movies[movieID].title}
        </li>
    })
  return (
    <ul>{renderMovies}</ul>
  )
}
