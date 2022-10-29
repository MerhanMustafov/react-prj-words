import { Definitions } from './interfaces/Data'
import { definition, example } from './functions/Functions'


interface Props {
  definitions: Definitions
  partOfSpeech: string
}

function Meaning(props: Props) {
    let key = 100
    let key_two = 200
  const { definitions, partOfSpeech } = props

  let defs: string[] | undefined = definition(partOfSpeech, definitions)
  let exs: string[] | undefined = example(partOfSpeech, definitions)


  return (
    
    <div className={`${partOfSpeech} p-of-s-w`}>
      {
      defs && defs.length > 0 ? (
        <span className="p-of-s"> {partOfSpeech}</span>
      ) : null
      }

      {defs && defs.map((d: any) => 

        <div key={key++} className="meaning-wrapper">

            <h3 ><span> Meaning - [{partOfSpeech}]: </span> {d}</h3>
            {exs && exs.length > 0 ?
                exs.map(ex => <p key={key_two++} > <span> Ex: </span>{ex}</p>) : null}
        </div>
      )
      }
    </div>

  )
}

export { Meaning }
