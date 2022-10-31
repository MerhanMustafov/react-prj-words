import {horizontalScroll, scrollToTheElement} from './functions/Functions'
interface Props {
    partOfSpeech: string[]
}

function PartOfSpeechNav(props: Props){
    let key = 1

    return (

        <div onWheel={(e) => horizontalScroll(e)} className="p-of-s-nav-w">
                {props.partOfSpeech.length > 0
                  ? props.partOfSpeech.map((pofs) => (
                      <p
                        onWheel={(e) => horizontalScroll(e)}
                        onClick={(e) => scrollToTheElement(e, pofs)}
                        key={key++}
                        className="ppp"
                      >
                        {pofs}
                      </p>
                    ))
                  : null}
              </div>
    )
}

export {PartOfSpeechNav}


