import { Definitions } from './interfaces/Data'
import { definition } from './functions/Functions'


interface Props {
  definitions: Definitions
  partOfSpeech: string
}

function Meaning(props: Props) {
    let key = 100
  const { definitions, partOfSpeech } = props

  let defs: string[] | undefined = definition(partOfSpeech, definitions)

  return (
    
    <div className={`${partOfSpeech} meaning`}>
      {
      defs && defs.length > 0 ? (
        <span className="p-of-s"> {partOfSpeech}</span>
      ) : null
      }

      {defs && defs.map((d: any) => <p key={key++}>{d}</p>)}
    </div>

  )
}

export { Meaning }
