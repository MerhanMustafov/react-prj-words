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
  realoadImages: () => void
  // setImages: (images: ImageData[]) => void
}

function ImageArea(props: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [imagesPerPage, setImagesPerPage] = useState<number>(10)

  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage
  const currentImages = props.images.slice(indexOfFirstImage, indexOfLastImage)

  const paginate = (e: React.MouseEvent, number: number) => {
    props.setLoadingImages(true)
    const element = e.target as HTMLElement
    const previouseClicked = document.querySelector('.clicked') as HTMLElement
    if(previouseClicked){
        previouseClicked.classList.remove('clicked')
    }
    element.classList.add('clicked')
    
    setCurrentPage(number)
    setTimeout(() => {
        props.setLoadingImages(false)

    }, 1100)
  }


  return (
    <div className="imgs-outer-wrapper">
        
            <a  id="pixabay-link" href="https://pixabay.com/" target="_blank"><img id="img-pixabay-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pixabay-logo.svg/1280px-Pixabay-logo.svg.png" alt="go to pixabay.com" /></a>
            

        <div
          onWheel={(e) => horizontalScroll(e)}
          className="images-w"
        >
            <>
            {props.loadingImages
            ? <div className="images-loading">
                 LOADING ...
                </div>
             
            : currentImages.length > 0 
            ? (currentImages.map((el, index) => (<img key={index} src={el.webformatURL} alt="image" />))) 
            : (
                <div className="no-images-wrapper">
                    <div className="no-images">There is no images !</div>
                    <i className="fa-solid fa-rotate-right" onClick={() => props.realoadImages()}></i>

                </div>
            )
            }
            
            
            </>
          
        </div>

        <Paginate
          totlalImages={props.images.length}
          imagesPerPage={imagesPerPage}
          paginate={paginate}
          setLoadingImages={props.setLoadingImages}
        ></Paginate>
    </div>
  )
}

export { ImageArea }
