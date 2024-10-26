import { Routes, Route } from 'react-router-dom'
import '../app/App.scss'
import { navInputOnScroll } from '../app/AppFunctions'
import { Meanings } from '../Meanings/Meanings'

interface Props {
  partOfSpeech: string[]
  setPartOfSpeech: (a: string[]) => void
  searchLoading: boolean
  setSearchLoading: (b: boolean) => void
  noSuchWordError: string
  setNoSuchWordError: (w: string) => void
}

function Home(props: Props) {
  window.addEventListener('scroll', (e) => navInputOnScroll(e))

  return (
    <div className="Home">
      <Routes>
        <Route
          path="/meaning/:word"
          element={
            <Meanings
              setPartOfSpeech={props.setPartOfSpeech}
              partOfSpeech={props.partOfSpeech}
              noSuchWordError={props.noSuchWordError}
              setNoSuchWordError={props.setNoSuchWordError}
            />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export { Home }
