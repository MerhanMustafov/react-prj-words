import React from 'react'
import { useState, useEffect } from 'react'

import './stylesheets/App.scss'
import { getMeaning } from '../../api/request'

// interface imports
import { Definitions } from '../meaning/interfaces/Data'
import {ImageData} from '../meaning/interfaces/Image'

// function imports
import { navInputOnScroll } from './functions/Functions'

// COMPONENT imports
import { Meaning } from '../meaning/Meaning'
import { Spinner } from '../Spinner/Spinner'
import { PartOfSpeechNav } from '../Nav/PartOfSpeechNav/PartOfSpeechNav'

function App() {
  window.addEventListener('scroll', (e) => navInputOnScroll(e))

  let key: number = 1
  const [word, setWord] = useState<string>('')
  const [wordSecondary, setWordSecondary] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')

  const [definitions, setDefinitions] = useState<Definitions>()
  const [partOfSpeech, setPartOfSpeech] = useState<string[]>([])

  const [images, setImages] = useState<ImageData[]>([])

  async function request(e: string) {
    const o: Definitions = {
      noun: { d: [], m: [], s: [], a: [], ex: [] },
      pronoun: { d: [], m: [], s: [], a: [], ex: [] },
      verb: { d: [], m: [], s: [], a: [], ex: [] },
      adjective: { d: [], m: [], s: [], a: [], ex: [] },
      adverb: { d: [], m: [], s: [], a: [], ex: [] },
      preposition: { d: [], m: [], s: [], a: [], ex: [] },
      conjunction: { d: [], m: [], s: [], a: [], ex: [] },
      interjection: { d: [], m: [], s: [], a: [], ex: [] },
    }
    if (e === 'click'.trim() || e === 'enter'.trim()) {
      //   e.preventDefault()
      if (word.length > 0) {
        setLoading(true)
        try {
          const res = await getMeaning(word)
          let p_of_s: string[] = []
          res.forEach((obj: any) => {
            obj.meanings.forEach((def: any) => {
              def.definitions.forEach((d: any) => {
                if (def.partOfSpeech === 'noun'.trim()) {
                  if (p_of_s.includes('noun'.trim()) === false) {
                    p_of_s.push('noun')
                  }
                  o.noun.d.push(d.definition)
                  if (d.example) {
                    o.noun.ex!.push(d.example)
                  }
                }
                if (def.partOfSpeech === 'pronoun'.trim()) {
                  if (p_of_s.includes('pronoun'.trim()) === false) {
                    p_of_s.push('pronoun'.trim())
                  }
                  o.pronoun.d.push(d.definition)
                  if (d.example) {
                    o.pronoun.ex!.push(d.example)
                  }
                }
                if (def.partOfSpeech.trim() === 'verb'.trim()) {
                  if (p_of_s.includes('verb'.trim()) === false) {
                    p_of_s.push('verb'.trim())
                  }
                  o.verb.d.push(d.definition)
                  if (d.example) {
                    o.verb.ex!.push(d.example)
                  }
                }
                if (def.partOfSpeech.trim() === 'adjective'.trim()) {
                  if (p_of_s.includes('adjective'.trim()) === false) {
                    p_of_s.push('adjective'.trim())
                  }
                  o.adjective.d.push(d.definition)
                  if (d.example) {
                    o.adjective.ex!.push(d.example)
                  }
                }
                if (def.partOfSpeech.trim() === 'adverb'.trim()) {
                  if (p_of_s.includes('adverb'.trim()) === false) {
                    p_of_s.push('adverb'.trim())
                  }
                  o.adverb.d.push(d.definition)
                  if (d.example) {
                    o.adverb.ex!.push(d.example)
                  }
                }
                if (def.partOfSpeech.trim() === 'preposition'.trim()) {
                  if (p_of_s.includes('preposition'.trim()) === false) {
                    p_of_s.push('preposition'.trim())
                  }
                  o.preposition.d.push(d.definition)
                  if (d.example) {
                    o.preposition.ex!.push(d.example)
                  }
                }
                if (def.partOfSpeech.trim() === 'conjunction'.trim()) {
                  if (p_of_s.includes('conjunction'.trim()) === false) {
                    p_of_s.push('conjunction'.trim())
                  }
                  o.conjunction.d.push(d.definition)
                  if (d.example) {
                    o.conjunction.ex!.push(d.example)
                  }
                }
                if (def.partOfSpeech.trim() === 'interjection'.trim()) {
                  if (p_of_s.includes('interjection'.trim()) === false) {
                    p_of_s.push('interjection'.trim())
                  }
                  o.interjection.d.push(d.definition)
                  if (d.example) {
                    o.interjection.ex!.push(d.example)
                  }
                }
              })
            })
          })
          setPartOfSpeech(p_of_s)
          setDefinitions(o)
          setError('')
          setWordSecondary(word)
          setImages([])
          setTimeout(() => {
            setLoading(false)
          }, 1000)
        } catch (err) {
          setError('There is no such word !')
          setPartOfSpeech([])
          setDefinitions(undefined)
          setImages([])
          setTimeout(() => {
            setLoading(false)
          }, 1000)
        }
      }
    }
  }

  function requestOnEnter(e: React.KeyboardEvent) {
    if (e.code === 'Enter') {
      request('enter')
    }
  }

  return (
    <div className="App">
      <header>
        <nav>
          <div className="word">
            <label htmlFor="wordInput">Word</label>
            <div className="i-w">
              <PartOfSpeechNav partOfSpeech={partOfSpeech}></PartOfSpeechNav>
              <input
                type="text"
                id="wordInput"
                placeholder="ex: sky"
                onChange={(e) => setWord(e.target.value)}
                onKeyDown={(e) => requestOnEnter(e)}
              />
              <i
                className="fa-sharp fa-solid fa-magnifying-glass"
                onClick={() => request('click')}
              ></i>
              {loading === false && error.length > 0 ? (
                <div className="error">There is no such word !</div>
              ) : null}
            </div>
          </div>
        </nav>
      </header>
      <main>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <div className="w">
            {definitions !== undefined
              ? Object.keys(definitions).map((x) => (
                  <Meaning
                    key={key++}
                    partOfSpeech={x}
                    definitions={definitions}
                    word={wordSecondary}
                    images={images}
                    setImages={setImages}
                  ></Meaning>
                ))
              : null}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
