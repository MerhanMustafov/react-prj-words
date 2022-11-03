
// INTERFACES
import { Definitions, ImageData } from '../meaning/MeaningInterfaces'

// COMPONENTS
import { MeaningBox } from '../meaningBox/MeaningBox'

// FUNCTIONS
import { definition, example } from './MeaningSectionFunctions'

interface Props {
  partOfSpeech: string
  definitions: Definitions | undefined
  word: string
//   audio: string[]
//   phonetic: string[]
  meaningImages: ImageData[]
  setMeaningImages: (imgData: ImageData[]) => void
}


function MeaningSection(props: Props) {
    let key = 632
  let defs: string[] | undefined = definition(
    props.partOfSpeech,
    props.definitions,
  )
  let exs: string[] | undefined = example(props.partOfSpeech, props.definitions)


  return (
    <div className="meaning-section">
      <div className={`${props.partOfSpeech} part-of-speech-title`}>
        {props.partOfSpeech}
      </div>
      {defs?.map((data) => (
        <MeaningBox
        key={key++}
          meaning={data}
          audio={props.definitions && props.definitions.audio}
          phonetic={props.definitions && props.definitions.phonetic}
          exs={exs}
          partOfSpeech={props.partOfSpeech}
          word={props.word}
          meaningImages={props.meaningImages}
          setMeaningImages={props.setMeaningImages}
        ></MeaningBox>
      ))}
      
    </div>
  )
}

export { MeaningSection }
