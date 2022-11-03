import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// STYLES
import '../app/App.scss'

// API
import { getMeaning } from '../../api/request'

// INTERFACES
import { Definitions, ImageData } from '../meaning/MeaningInterfaces'

// FUNCTIONS
import { navInputOnScroll } from '../app/AppFunctions'

// COMPONENTS
import { Meaning } from '../meaning/Meaning'
import { Spinner } from '../spinner/Spinner'
import { NavPartOfSpeech } from '../navPartOfSpeach/NavPartOfSpeech'
import { Search } from '../Search/Search'
import { Meanings } from '../Meanings/Meanings'

interface Props {
  partOfSpeech: string[]
  setPartOfSpeech: (a: string[]) => void
  searchLoading: boolean
  setSearchLoading: (b: boolean) => void
//   searchError: string
//   setSearchError: (s: string) => void
}

function Home(props: Props) {
  window.addEventListener('scroll', (e) => navInputOnScroll(e))

  return (
    <div className="App">
      <Search partOfSpeech={props.partOfSpeech}></Search>
      <Routes>
        <Route
          path="meaning/:word"
          element={
            <Meanings
              setPartOfSpeech={props.setPartOfSpeech}
              partOfSpeech={props.partOfSpeech}
            />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export { Home }
