export function navInputOnScroll(e: any) {
    const w = document.querySelector('.word')
    if (e.path[1].scrollY > 65) {
      w?.classList.add('fix')
    } else {
      if (w?.classList.contains('fix')) {
        w?.classList.remove('fix')
      }
    }
  }
