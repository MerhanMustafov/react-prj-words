import { useState } from 'react'
import { Definitions } from './interfaces/Data'
import { definition, example } from './functions/Functions'

import { ImageData } from './interfaces/Image'

// Components imports
import { MeaningBox } from './meaningBox/MeaningBox'
// API import

interface Props {
  definitions: Definitions
  partOfSpeech: string
  word: string
  images: ImageData[]
  setImages: (imagesData: ImageData[]) => void
}

function Meaning(props: Props) {
  const { definitions, partOfSpeech, word } = props

//   const [images, setImages] = useState<ImageData[]>([])
  

  let defs: string[] | undefined = definition(partOfSpeech, definitions)
  let exs: string[] | undefined = example(partOfSpeech, definitions)

  return (
    <>
      {defs && defs.length > 0 ? (
        <div className={`${partOfSpeech} p-of-s-w`}>
          {defs && defs.length > 0 ? (
            <>
              <span className="p-of-s"> {`${partOfSpeech}`} </span>
            </>
          ) : null}

          {defs &&
            defs.map((d: any) => (
              <MeaningBox
                defs={defs}
                exs={exs}
                partOfSpeech={partOfSpeech}
                word={word}
                d={d}
                images={props.images}
                setImages={props.setImages}
              ></MeaningBox>
            ))}
        </div>
      ) : null}
    </>
  )
}

export { Meaning }

// {
//       defs && defs.length > 0 ? (
//         <>
//         <span className="p-of-s"> {`${partOfSpeech }`} </span>
//         </>

//       ) : null
//       }

//       {defs && defs.map((d: any) =>

//         <div key={key++} className="meaning-wrapper">
//         <span className="p-of-s-word" >{word}</span>
//         <span onClick={(e) => request(e)} className="visual" >{word}</span>
//         <div className="images-w">
//             {images.length > 0
//             ?
//                 images.map(i => <img key={key_three++} src={i.webformatURL} alt="image" /> )
//             : null}
//         </div>

//             <h3 ><span> Meaning - [{partOfSpeech}]: </span> {d}</h3>
//             {exs && exs.length > 0 ?
//                 exs.map(ex => <p key={key_two++} > <span> Ex: </span>{ex}</p>) : null}
//         </div>
//       )
//       }
