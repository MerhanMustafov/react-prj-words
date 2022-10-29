import React from 'react'
import { useState, useEffect } from 'react'
import './stylesheets/App.scss'
import { getMeaning } from './api/request'

// interface imports
import {Definitions} from './interface/Data'

// COMPONENT imports
import {Meaning} from './components/meaning/Meaning'



function App() {
  let key: number = 1
  let key_two: number = 100
  let def_key: number = 100
  const [word, setWord] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const [definitions, setDefinitions] = useState<Definitions>()
  if(definitions){
    const xx = Object.keys(definitions).map(x => x !== 'adverb' ? x : null)

  }

  async function request(e: React.KeyboardEvent) {
    const o: Definitions = {
      noun: {d: [], m: [], s: [], a: [], ex: []},
      verb: {d: [], m: [], s: [], a: [], ex: []},
      adjective: {d: [], m: [], s: [], a: [], ex: []},
      adverb: {d: [], m: [], s: [], a: [], ex: []},
      preposition: {d: [], m: [], s: [], a: [], ex: []},
      conjunction: {d: [], m: [], s: [], a: [], ex: []},
      interjection: {d: [], m: [], s: [], a: [], ex: []},
    }
    if (e.code === 'Enter') {
      e.preventDefault()
      if (word.length > 0) {
        try {
          const res = await getMeaning(word)
          res.forEach((obj: any) => {
            obj.meanings.forEach((def: any) => {
              def.definitions.forEach((d: any) => {
                console.log(d.definition)
                const partOfSpeech: string = def.partOfSpeech
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
          console.log(definitions, 'DDDDDDD')
        } catch (err) {
          setError('There is no such word !')
          setData([])
          console.log(error)
        }
      }
    }
  }

//   function scroll(e: React.UIEvent<HTMLElement>) {
//     console.log(e)
//   }

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
      {/* onScroll={(e) => scroll(e)} */}
      <main >
        <div className='w'>
        {
        definitions &&  
        Object.keys(definitions)
        .map(x => <Meaning partOfSpeech={x} definitions={definitions}></Meaning>)}
       
        </div>
        
      </main>
    </div>
  )
}

export default App



// {definitions && definitions.noun.d?.length > 0
// ? <div className="noun">
// <span className='p-of-s'> Noun</span>
// {
// definitions.noun.d.map(d => <p>{d}</p> )
// }
// </div>
// :null


// }