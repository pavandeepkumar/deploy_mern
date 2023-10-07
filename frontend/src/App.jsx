import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokles] = useState([])
  useEffect(() => {
    axios.get('/api/jokes').then(res => {
      setJokles(res.data)
    }).catch(err => {
      console.error(err)
    })
  },[])
  return (
    <>
      <h1>Jokes app</h1>
      <h2> Jokes  {jokes.length}</h2>
      <div>
        {jokes.map(joke => (
          <>
            <div key={joke.id}>

              <h3 >{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default App
