export function navInputOnScroll(e: any) {
  const element = document.getElementById('i-w-onScroll')
  if (e.path[1].scrollY > 60) {
    element?.classList.remove('hidden')
  } else {
    element?.classList.add('hidden')
  }
}
