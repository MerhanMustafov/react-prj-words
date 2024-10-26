import { useState } from 'react'
import { getImagesFromWord } from '../../api/pixabayApi'
import { ImageArea } from '../meaningImageArea/MeaningImageArea'
import { ImageData } from '../meaning/MeaningInterfaces'

interface Props {
  meaning: string
  audio?: string[]
  phonetic?: string[]
  exs: string[] | undefined
  partOfSpeech: string
  word: string
  meaningImages: ImageData[]
  setMeaningImages: (imgData: ImageData[]) => void
}

function MeaningBox(props: Props) {
  let key = 100
  let key_two = 200
  const [imagesClick, setImagesClick] = useState<boolean>(false)
  const [loadingImages, setLoadingImages] = useState<boolean>(false)

  async function reaload() {
    setLoadingImages(true)
    try {
      const res = await getImagesFromWord(props.word)
      if (res.hits.length > 0) {
        props.setMeaningImages(res.hits)
      }
    } catch (err) {
      props.setMeaningImages([])
    }
    setTimeout(() => {
      setLoadingImages(false)
    }, 2000)
  }

  async function getImages(e: React.MouseEvent) {
    setLoadingImages(true)
    if (imagesClick === true) {
      setImagesClick(false)
    } else {
      setImagesClick(true)
    }
    if (props.meaningImages.length <= 0) {
      try {
        const res = await getImagesFromWord(props.word)
        if (res.hits.length > 0) {
          props.setMeaningImages(res.hits)
        }
      } catch (err) {
        props.setMeaningImages([])
      }
    }
    setTimeout(() => {
      setLoadingImages(false)
    }, 2000)
  }

  return (
    <>
      <div key={key++} className="meaning-wrapper">
        <span className="p-of-s-word block">{props.word} </span>
        <div className="audio-phonetic-wrapper">
          <audio controls>
            {' '}
            <source src={props.audio && props.audio[0]} type="audio/mp3" />{' '}
          </audio>
          <span className="phinetic-text">
            {props.phonetic && props.phonetic[0]}
          </span>
        </div>

        <span onClick={(e) => getImages(e)} className="visual">
          look for images
        </span>

        {imagesClick === true ? (
          <ImageArea
            images={props.meaningImages}
            loadingImages={loadingImages}
            setLoadingImages={setLoadingImages}
            realoadImages={reaload}
          ></ImageArea>
        ) : null}

        <h3>
          {' '}
          Meaning - [{props.partOfSpeech}]:
          <span>{props.meaning}</span>
        </h3>
        {props.exs && props.exs.length > 0
          ? props.exs.map((ex) => (
              <p key={++key_two}>
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
