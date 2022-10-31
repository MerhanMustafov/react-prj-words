export  function horizontalScroll(e: React.WheelEvent){
        const scrollEl = document.querySelector(`.p-of-s-nav-w`)
        if(e.deltaY === 100){
            // +
            (scrollEl as HTMLElement).scrollLeft += 15;
        }else{
            // -
            (scrollEl as HTMLElement).scrollLeft -= 15;
        }
    }

export function scrollToTheElement(e: React.MouseEvent<HTMLElement>, partOfSpeech: string) {
    // this is the element to scroll to
    const el = document.querySelector(`.${partOfSpeech}`) as HTMLElement;
    // header element
    const header = document.querySelector('header') as HTMLElement
    // the height of the whole header + 50
    const hheight = header.clientHeight +20
    // scroll to minus the height of the whole header
    window.scroll(0, el.offsetTop - hheight)

}
