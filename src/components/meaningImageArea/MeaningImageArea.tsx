import { DOMElement, useState } from 'react'

// COMPONENTS
import { Paginate } from '../pagination/Pagination'

// INTERFACES
import { ImageData } from '../meaning/MeaningInterfaces'

// FUNCTIONS
import { horizontalScroll } from './MeaningImageAreaFunctions'

interface Props {
  images: ImageData[]
  loadingImages: boolean
  setLoadingImages: (b: boolean) => void
  // setImages: (images: ImageData[]) => void
}

function ImageArea(props: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [imagesPerPage, setImagesPerPage] = useState<number>(10)

  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage
  const currentImages = props.images.slice(indexOfFirstImage, indexOfLastImage)

  const paginate = (e: React.MouseEvent, number: number) => {
    const element = e.target as HTMLElement
    const previouseClicked = document.querySelector('.clicked') as HTMLElement
    if(previouseClicked){
        previouseClicked.classList.remove('clicked')
    }
    element.classList.add('clicked')
    
    setCurrentPage(number)
  }
  return (
    <>
        <div
          onWheel={(e) => horizontalScroll(e)}
          className="images-w"
        >
            <>
            {props.loadingImages
            ? <div>LOADING ...</div>
             
            : currentImages.length > 0 
            ? (currentImages.map((el, index) => (<img key={index} src={el.webformatURL} alt="image" />))) 
            : (<div className="no-images">There is no images !</div>)
            }
            
            
            </>
          
        </div>

        <Paginate
          totlalImages={props.images.length}
          imagesPerPage={imagesPerPage}
          paginate={paginate}
        ></Paginate>
    </>
  )
}

export { ImageArea }
