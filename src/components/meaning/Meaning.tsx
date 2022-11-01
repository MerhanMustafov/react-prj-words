// INTERFACES
import { Definitions, ImageData } from './MeaningInterfaces'

// COMPONENTS
import { MeaningSection } from '../meaningSection/MeaningSection'

interface Props {
  definitions: Definitions
  partOfSpeech: string[]
  word: string
  meaningImages: ImageData[]
  setMeaningImages: (imgData: ImageData[]) => void
}

function Meaning(props: Props) {
  let key = 1

  return (
    <>
      <div className={`${props.partOfSpeech} m-s-block-wrapper`}>
        {props.partOfSpeech.length > 0
          ? props.partOfSpeech.map((partOfSpeachSection) => (
              <MeaningSection
                key={key++}
                partOfSpeech={partOfSpeachSection}
                definitions={props.definitions}
                word={props.word}
                meaningImages={props.meaningImages}
                setMeaningImages={props.setMeaningImages}
              ></MeaningSection>
            ))
          : null}
      </div>
    </>
  )
}

export { Meaning }
