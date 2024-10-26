export function horizontalScroll(e: React.WheelEvent) {
  const scrollEl = document.querySelector(`.p-of-s-nav-w`)
  if (e.deltaY === 100) {
    ;(scrollEl as HTMLElement).scrollLeft += 15
  } else {
    ;(scrollEl as HTMLElement).scrollLeft -= 15
  }
}

export function scrollToTheElement(
  e: React.MouseEvent<HTMLElement>,
  partOfSpeech: string,
) {
  const el = document.querySelector(`.${partOfSpeech}`) as HTMLElement
  window.scroll(0, el.offsetTop - 50)
}
