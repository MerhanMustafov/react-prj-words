import { Definitions } from '../../interface/Data'
import { definition } from '../functions/Functions'

interface Props {
  definitions: Definitions
  partOfSpeech: string
}

function Meaning(props: Props) {
  const { definitions, partOfSpeech } = props
  console.log(definitions, partOfSpeech, 'MEANInG')

  let defs: string[] | undefined = definition(partOfSpeech, definitions)

  return (
    <div className={partOfSpeech}>
      {
      defs && defs.length > 0 ? (
        <span className="p-of-s"> {partOfSpeech}</span>
      ) : null
      }

      {defs && defs.map((d: any) => <p>{d}</p>)}
    </div>
  )
}

export { Meaning }
