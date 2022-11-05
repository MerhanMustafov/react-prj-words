import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// STYLES
import './App.scss'

// FUNCTIONS
import { navInputOnScroll } from './AppFunctions'

// COMPONENTS
import { Home } from '../Home/Home'
import { Search } from '../Search/Search'

function App() {
  window.addEventListener('scroll', (e) => navInputOnScroll(e))

  const [partOfSpeech, setPartOfSpeech] = useState<string[]>([])
  const [searchLoading, setSearchLoading] = useState<boolean>(false)
  const [noSuchWordError, setNoSuchWordError] = useState<string>('')

  return (
    <div className="App">
      <Search
        partOfSpeech={partOfSpeech}
        noSuchWordError={noSuchWordError}
        setNoSuchWordError={setNoSuchWordError}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              partOfSpeech={partOfSpeech}
              setPartOfSpeech={setPartOfSpeech}
              searchLoading={searchLoading}
              setSearchLoading={setSearchLoading}
              noSuchWordError={noSuchWordError}
              setNoSuchWordError={setNoSuchWordError}
            />
          }
        ></Route>

        <Route
          path={'/home/*'}
          element={
            <Home
              partOfSpeech={partOfSpeech}
              setPartOfSpeech={setPartOfSpeech}
              searchLoading={searchLoading}
              setSearchLoading={setSearchLoading}
              noSuchWordError={noSuchWordError}
              setNoSuchWordError={setNoSuchWordError}
            />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
