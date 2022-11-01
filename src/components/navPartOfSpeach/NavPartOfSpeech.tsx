// FUNCTIONS
import {horizontalScroll, scrollToTheElement} from './NavPartOfSpeechFunctions'

interface Props {
    partOfSpeech: string[]
}

function NavPartOfSpeech(props: Props){
    let key = 333

    function clickHandle(e: React.MouseEvent<HTMLElement>, partOfSpeech: string){
        scrollToTheElement(e, partOfSpeech)
        const previouseActive = document.querySelector('.active') as HTMLElement
        if(previouseActive?.classList?.contains('active')){
            previouseActive.classList.remove('active')
        }
        (e.target as HTMLElement).classList.add('active')
    }

    return (

        <div onWheel={(e) => horizontalScroll(e)} className="p-of-s-nav-w">
                {props.partOfSpeech.length > 0
                  ? props.partOfSpeech.map((pofs) => (
                      <p
                        onWheel={(e) => horizontalScroll(e)}
                        onClick={(e) => clickHandle(e, pofs)}
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

export {NavPartOfSpeech}


