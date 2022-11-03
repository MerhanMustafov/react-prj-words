import { Spinner } from '../spinner/Spinner'
import { Meaning } from '../meaning/Meaning'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMeaning } from '../../api/request'
import { Definitions, ImageData } from '../meaning/MeaningInterfaces'
import {NavPartOfSpeech} from '../navPartOfSpeach/NavPartOfSpeech'

interface Props {
    setPartOfSpeech: (array: string[]) => void
    partOfSpeech: string[]
    // setSearchError: (s: string) => void
}

export function Meanings(props: Props) {
  const params = useParams()
  let key = 352

  const [meaningImages, setMeaningImages] = useState<ImageData[]>([])

  const [word, setWord] = useState<string>('')
  const [wordSecondary, setWordSecondary] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')

  const [definitions, setDefinitions] = useState<Definitions>()
  const [partOfSpeech, setPartOfSpeech] = useState<string[]>([])

  useEffect(() => {
    async function request(word: string | undefined) {
      if (word !== undefined) {
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
        // if (e === 'click'.trim() || e === 'enter'.trim()) {
        //   e.preventDefault()
        if (word.length > 0 && word !== wordSecondary) {
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
            props.setPartOfSpeech(p_of_s)
            setDefinitions(o)
            setError('')
            setWordSecondary(word)
            setMeaningImages([])
              setLoading(false)
            // setTimeout(() => {
            //   setLoading(false)
            // }, 1000)
          } catch (err) {
            setError('There is no such word !')
            // props.setSearchError('There is no such word !')
            setPartOfSpeech([])
            setDefinitions(undefined)
            setMeaningImages([])
              setLoading(false)
            // setTimeout(() => {
            //   setLoading(false)
            // }, 1000)
          }
        }
        //   }
      }
    }
    request(params.word)
    // console.log('WithIn MeaningS useEffect')
  }, [params.word])

  return (
    <main>
      {loading ? (
                <Spinner></Spinner>
              ) : (
                <div className="w">
                  {definitions !== undefined ? (
                    <Meaning
                      key={key++}
                      partOfSpeech={partOfSpeech}
                      definitions={definitions}
                      word={wordSecondary}
                      meaningImages={meaningImages}
                      setMeaningImages={setMeaningImages}
                    ></Meaning>
                  ) : null}
                  <NavPartOfSpeech partOfSpeech={props.partOfSpeech}></NavPartOfSpeech>
                </div>
              )}
    </main>
  )
}
