import React, { useState } from 'react'

const MovieList = (props) => {
  const [movies, setMovies] = useState([
    'Alien',
    'Cowboys Vs. Aliens',
    'Alien Vs. Predator',
  ])
  const [input, setInput] = useState('')
  
  const addToList = () => {
    setMovies([...movies, input])
    setInput('')
  }

  return (
    <div>
      {movies.map((movie, index) => {
        return <h2 key={index}>{movie}</h2>
      })}
      <input
        placeholder="Add a movie"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setMovies([...movies, input])}>Add to list</button>
    </div>
  )
}

export default MovieList


//BELOW IS DOING THE EXACT SAME THING AS ABOVE //

// class MovieListClass extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       movies: ['Movie1', 'Movie2', 'Movie3'],
//       input: '',
//     }
//   }

//   handleChange = e => {
//     this.setState({
//       input: e.target.value
//     })
//   }

//   addToList = () => {
//     this.setState({
//       movies: [...this.state.movies, this.state.input]
//     })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.movies.map((movie, index) => (
//           <h2 key={index}>{movie}</h2>
//         ))}
//         <input onChange={e => this.handleChange(e)} />
//         <button onClick={this.addToList} >Add to List</button>
//       </div>
//     )
//   }
// }