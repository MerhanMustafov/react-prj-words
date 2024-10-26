export function horizontalScroll(e: React.WheelEvent) {
  const ee = e.target as HTMLElement
  if (ee.tagName === 'IMG' && ee.parentElement?.className === 'images-w') {
    if (e.deltaY === 100) {
      ee.parentElement.scrollLeft += 150
    } else {
      ee.parentElement.scrollLeft -= 150
    }
  } else if (ee.tagName === 'DIV' && ee.className === 'images-w') {
    if (e.deltaY === 100) {
      ee.scrollLeft += 150
    } else {
      ee.scrollLeft -= 150
    }
  }
}
