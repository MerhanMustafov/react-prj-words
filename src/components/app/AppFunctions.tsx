export function navInputOnScroll(e: any) {
    const w = document.querySelector('.word')
    const element = document.getElementById('i-w-onScroll')
    if (e.path[1].scrollY > 60) {
    //   w?.classList.add('fix')
      element?.classList.remove('hidden')
    } else {
        element?.classList.add('hidden')
    //   if (element?.classList.contains('fix')) {
        // w?.classList.remove('fix')
    //   }
    }
  }
