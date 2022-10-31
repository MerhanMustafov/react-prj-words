import { useState } from 'react'
import { getImagesFromWord } from '../../../api/pixabayApi'

// interface imports
import { ImageData } from '../interfaces/Image'

// import functions
import {horizontalScroll} from './functions/Functions'

interface Props {
  defs: string[] | undefined
  exs: string[] | undefined
  partOfSpeech: string
  word: string
  d: any
  images: ImageData[]
  setImages: (imgData: ImageData[]) => void
//   imagesClick: boolean
//   setImagesClick: (x: boolean) => void
}

function MeaningBox(props: Props) {
  let key = 100
  let key_two = 200
  let key_three = 500
//   const [images, setImages] = useState<ImageData[]>([])
const [imagesClick, setImagesClick] = useState<boolean>(false)
  


  async function request(e: React.MouseEvent) {
    if(imagesClick === true){
        setImagesClick(false)
    }else{
        setImagesClick(true)

    }
    if(props.images.length <= 0){
        // console.log(props.images, 'request follows')
        try {
        const res = await getImagesFromWord(props.word)
        if (res.hits.length > 0) {
            props.setImages(res.hits)
            setImagesClick(true)
        }
        } catch (err) {
            // props.setImages([])
            console.log('There is no images !')
        }
    }
  }


  return (
    <>
      <div key={key++} className="meaning-wrapper">
        <span className="p-of-s-word block">{props.word}</span>
        {/* <input type="checkbox" id="inputCheckbox"/> */}
        <span onClick={(e) => request(e)} className="visual block">
          look for images
        </span>
        {imagesClick === true
        ?
        <div
          onWheel={(e) => horizontalScroll(e)}
        //   id={`images-w-id${Math.random()}`}
          className="images-w"
          
        >
          {props.images.length > 0
            ? props.images.map((i) => (
                <img key={key_three++} src={i.webformatURL} alt="image" />
              ))
            : <div>There is no images !</div> }
        </div>

        : null
        }
        

        <h3>
          <span> Meaning - [{props.partOfSpeech}]: </span> {props.d}
        </h3>
        {props.exs && props.exs.length > 0
          ? props.exs.map((ex) => (
              <p key={key_two++}>
                {' '}
                <span> Ex: </span>
                {ex}
              </p>
            ))
          : null}
      </div>
    </>
  )
}

export { MeaningBox }
