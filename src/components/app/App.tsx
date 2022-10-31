import React from 'react'
import { useState, useEffect } from 'react'

import './stylesheets/App.scss'
import { getMeaning } from '../../api/request'

// interface imports
import { Definitions } from '../meaning/interfaces/Data'

// function imports
import { navInputOnScroll } from './functions/Functions'

// COMPONENT imports
import { Meaning } from '../meaning/Meaning'
import { Spinner } from '../Spinner/Spinner'

function App() {
  window.addEventListener('scroll', (e) => navInputOnScroll(e))

  let key: number = 1
  let key_two: number = 100
  const [word, setWord] = useState<string>('')
  const [wordSecondary, setWordSecondary] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  //   const [data, setData] = useState([])
  const [error, setError] = useState('')

  const [definitions, setDefinitions] = useState<Definitions>()
  const [partOfSpeech, setPartOfSpeech] = useState<string[]>([])

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
          setTimeout(() => {
            setLoading(false)
          }, 1000)
        } catch (err) {
          setError('There is no such word !')
          setDefinitions(undefined)
          setTimeout(() => {
            setLoading(false)
          }, 1000)
        }
      }
    }
  }

  function x(e: React.KeyboardEvent) {
    if (e.code === 'Enter') {
      request('enter')
    }
  }

    function horizontalScroll(e: React.WheelEvent){
        // const event = e as HTMLElement
        if(e.deltaY === 100){
            // +
            (e.target as HTMLElement).scrollLeft += 5;
        }else{
            // -
            (e.target as HTMLElement).scrollLeft -= 5;
        }
    // (e.target as HTMLElement).scrollLeft += 5;
    //     console.log((e))
    }



  return (
    <div className="App">
        
      <header>
        <nav>
          <div className="word">
            <label htmlFor="wordInput">Word</label>
            <div className="i-w">
                <div onWheel={(e) => horizontalScroll(e)} className="p-of-s-nav-w">
                {partOfSpeech.length > 0
                  ? partOfSpeech.map((pofs) => (
                      <p
                        onClick={(e) => scrollToTheElement(e, pofs)}
                        key={key_two++}
                        className="ppp"
                      >
                        {pofs}
                      </p>
                    ))
                  : null}
              </div>
                
              <input
                type="text"
                id="wordInput"
                placeholder="ex: sky"
                onChange={(e) => setWord(e.target.value)}
                onKeyDown={(e) => x(e)}
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
            {/* <> */}
            
            

            {definitions !== undefined
              ? Object.keys(definitions).map((x) => (
                  <Meaning
                    key={key++}
                    partOfSpeech={x}
                    definitions={definitions}
                    word={wordSecondary}
                  ></Meaning>
                ))
              : null}
            {/* </> */}
          </div>
        )}
      </main>
    </div>
  )
}

export default App

console.log([window])
console.log([document.querySelector(`.verb`)])
function scrollToTheElement(e: React.MouseEvent<HTMLElement>, partOfSpeech: string) {
    // this is the element to scroll to
    const el = document.querySelector(`.${partOfSpeech}`) as HTMLElement;
    // header element
    const header = document.querySelector('header') as HTMLElement
    // the height of the whole header + 50
    const hheight = header.clientHeight +20
    // scroll to minus the height of the whole header
    window.scroll(0, el.offsetTop - hheight)

}
