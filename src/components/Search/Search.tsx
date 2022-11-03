import {NavPartOfSpeech} from '../navPartOfSpeach/NavPartOfSpeech'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'

interface Props {
    partOfSpeech: string[]
    
}

export function Search(props: Props) {
    const navigate = useNavigate()
    const params = useParams()
    const [inputWord, setInputWord] = useState<string>('')
    // console.log(' withIN SEARCH', params['*']?.split('/')[1])

    useEffect(() => {
        if(params['*']?.split('/')[1] !== undefined){
         setInputWord(params['*']?.split('/')[1])

        }
    }, [params['*']?.split('/')[1]])

   

    function request(){
        navigate(`/home/meaning/${inputWord}`)

    }


    function requestOnEnter(e: React.KeyboardEvent){
        if(e.code === 'Enter'){
            navigate(`/home/meaning/${inputWord}`)
        }
    }

  return (
    <header>
      <nav>
        <div className="word">
          <label htmlFor="wordInput" onClick={() => navigate('/') }>Word</label>
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
            {/* {props?.searchLoading === false && props.searchError.length > 0 ? (
              <div className="error">There is no such word !</div>
            ) : null} */}
          </div>
        </div>
      </nav>
    </header>
  )
}
