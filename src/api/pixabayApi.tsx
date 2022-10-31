const baseUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=`



async function getImagesFromWord(word: string){
    const url = baseUrl + word
    const request = await fetch(url)
    return request.json()
}


export {getImagesFromWord}