import { NavPartOfSpeech } from '../navPartOfSpeach/NavPartOfSpeech'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

interface Props {
  partOfSpeech: string[]
  noSuchWordError?: string
}

export function Search(props: Props) {
  const navigate = useNavigate()
  const params = useParams()
  const [inputWord, setInputWord] = useState<string>('')

  useEffect(() => {
    if (params['*']?.split('/')[1] !== undefined) {
      setInputWord(params['*']?.split('/')[1])
    }
  }, [params['*']?.split('/')[1]])

  function request() {
    navigate(`/home/meaning/${inputWord}`)
  }

  function requestOnEnter(e: React.KeyboardEvent) {
    if (e.code === 'Enter') {
      navigate(`/home/meaning/${inputWord}`)
    }
  }

  function logoClick() {
    document.title = 'Check-Word'
    navigate('/')
  }

  return (
    <header>
      <nav>
        <div className="word">
          <label htmlFor="wordInput" onClick={() => logoClick()}>
            Word
          </label>
          <div className="i-w">
            <input
              type="text"
              id="wordInput"
              placeholder="ex: sky"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              onKeyDown={(e) => requestOnEnter(e)}
            />
            <i
              className="fa-sharp fa-solid fa-magnifying-glass"
              onClick={() => request()}
            ></i>
            {props.noSuchWordError && props.noSuchWordError.length > 0 ? (
              <div className="error">There is no such word !</div>
            ) : null}
          </div>
          <div className="hidden" id="i-w-onScroll">
            <input
              type="text"
              id="wordInput-onScroll"
              placeholder="ex: sky"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              onKeyDown={(e) => requestOnEnter(e)}
            />
            <i
              className="fa-sharp fa-solid fa-magnifying-glass"
              onClick={() => request()}
            ></i>
            {/* {props.noSuchWordError && props.noSuchWordError.length > 0 ? (
              <div className="error">There is no such word !</div>
            ) : null} */}
          </div>
        </div>
      </nav>
    </header>
  )
}
