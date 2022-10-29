import React from 'react'
import { useState, useEffect } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

import './stylesheets/App.scss'
import { getMeaning } from '../../api/request'

// interface imports
import { Definitions } from '../meaning/interfaces/Data'

// function imports
import {navInputOnScroll} from './functions/Functions'

// COMPONENT imports
import { Meaning } from '../meaning/Meaning'

function App() {
  window.addEventListener('scroll', (e) => navInputOnScroll(e))

  let key: number = 1
  const [word, setWord] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const [definitions, setDefinitions] = useState<Definitions>()


  async function request(e: React.KeyboardEvent) {
    const o: Definitions = {
      noun: { d: [], m: [], s: [], a: [], ex: [] },
      verb: { d: [], m: [], s: [], a: [], ex: [] },
      adjective: { d: [], m: [], s: [], a: [], ex: [] },
      adverb: { d: [], m: [], s: [], a: [], ex: [] },
      preposition: { d: [], m: [], s: [], a: [], ex: [] },
      conjunction: { d: [], m: [], s: [], a: [], ex: [] },
      interjection: { d: [], m: [], s: [], a: [], ex: [] },
    }
    if (e.code === 'Enter') {
      e.preventDefault()
      if (word.length > 0) {
        try {
          const res = await getMeaning(word)
          res.forEach((obj: any) => {
            obj.meanings.forEach((def: any) => {
              def.definitions.forEach((d: any) => {
                if (def.partOfSpeech === 'noun'.trim()) {
                  o.noun.d.push(d.definition)
                }
                if (def.partOfSpeech.trim() === 'verb'.trim()) {
                  o.verb.d.push(d.definition)
                }
                if (def.partOfSpeech.trim() === 'adjective'.trim()) {
                  o.adjective.d.push(d.definition)
                }
                if (def.partOfSpeech.trim() === 'adverb'.trim()) {
                  o.adverb.d.push(d.definition)
                }
                if (def.partOfSpeech.trim() === 'preposition'.trim()) {
                  o.preposition.d.push(d.definition)
                }
                if (def.partOfSpeech.trim() === 'conjunction'.trim()) {
                  o.conjunction.d.push(d.definition)
                }
                if (def.partOfSpeech.trim() === 'interjection'.trim()) {
                  o.interjection.d.push(d.definition)
                }
              })
            })
          })
          setDefinitions(o)
        } catch (err) {
          setError('There is no such word !')
          setData([])
        }
      }
    }
  }

  

  return (
    <div className="App">
      <header>
        <nav>
          <div className="word">
            <label htmlFor="wordInput">Word</label>
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
        <div className="w">
          {definitions &&
            Object.keys(definitions).map((x) => (
              <Meaning key={key++} partOfSpeech={x} definitions={definitions}></Meaning>
            ))}
        </div>
      </main>
    </div>
  )
}

export default App
