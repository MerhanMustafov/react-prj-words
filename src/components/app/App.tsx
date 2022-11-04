import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// STYLES
import './App.scss'

// API
import { getMeaning } from '../../api/request'

// INTERFACES
import { Definitions, ImageData } from '../meaning/MeaningInterfaces'

// FUNCTIONS
import { navInputOnScroll } from './AppFunctions'

// COMPONENTS
import { Meaning } from '../meaning/Meaning'
import { Spinner } from '../spinner/Spinner'
import { NavPartOfSpeech } from '../navPartOfSpeach/NavPartOfSpeech'

import { Home } from '../Home/Home'
import { Search } from '../Search/Search'

function App() {
  window.addEventListener('scroll', (e) => navInputOnScroll(e))

  const [partOfSpeech, setPartOfSpeech] = useState<string[]>([])
  const [searchLoading, setSearchLoading] = useState<boolean>(false)

  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={<Search partOfSpeech={partOfSpeech} />}
        ></Route>

        <Route
          path="/home/*"
          element={
            <Home
              partOfSpeech={partOfSpeech}
              setPartOfSpeech={setPartOfSpeech}
              searchLoading={searchLoading}
              setSearchLoading={setSearchLoading}
            />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
