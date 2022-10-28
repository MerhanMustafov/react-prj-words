import React from 'react'
import { useState, useEffect } from 'react'
import './stylesheets/App.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Button, Form, Container, Card } from 'react-bootstrap'
import { getMeaning } from './api/request'
function App() {
  let dataDemo = [1, 2, 3, 4]
  let key: number = 1
  let key_two: number = 100
  let def_key: number = 100
  const [word, setWord] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  console.log(data)

  async function request(e: React.KeyboardEvent) {
    if (e.code === 'Enter') {
      e.preventDefault()
      if (word.length > 0) {
        try {
          const res = await getMeaning(word)
          setData(res)
          console.log(data)
        } catch (err) {
          setError('There is no such word !')
          setData([])
          console.log(error)
        }
      }
    }
  }

  return (
    <div className="App">
      <header>
        <nav>
          <div className="word">
            <label htmlFor="wordInput">
              Word
            </label>
            <input
              type="text"
              id="wordInput"
              placeholder="ex: sky"
              onChange={(e) => setWord(e.target.value)}
              onKeyDown={(e) => request(e)}
            />
          </div>
        </nav>
      </header>
      <main>
        {data && data.length > 0 ? data.map(
            (obj: any) => 
                obj.meanings.map((meaning: any) => 
                meaning.definitions.map(
                    (def: any) => 
                        <div key={def_key++} className="def-card">
                            <p className="partOfSpeech" >{meaning.partOfSpeech}</p>
                            <p>{def.definition}</p> 
                            {def.example?.length > 0 
                            ? 
                            <p><span className="example">exapmple:</span> {def?.example}</p>
                            : null
                            }
                        </div>
                    )
                )
            )
            : <div className="noSuchWord">{error}</div>
            }
      </main>
    </div>
  )
}

export default App
