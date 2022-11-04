import {useRef} from 'react'

interface Props{
    totlalImages: number,
    imagesPerPage: number
    paginate: (e: React.MouseEvent, num: number) => void
    setLoadingImages: (b: boolean) => void
}

function Paginate(props: Props){
    const pageBtn = useRef<HTMLInputElement>(null)
    const pageNnumbers = [];

    for (let i = 1; i <= Math.ceil(props.totlalImages / props.imagesPerPage); i++){
        pageNnumbers.push(i)
    }

    return (
        <div className="paginate-w">
            {pageNnumbers.map(number => <span ref={pageBtn} onClick={(e) => props.paginate(e,number)} key={number} className="page-item"> {number} </span> )}
        </div>
    )
}

export {Paginate}