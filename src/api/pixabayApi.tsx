const baseUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&per_page=100&q=`



async function getImagesFromWord(word: string){
    const url = baseUrl + word.trim()
    const request = await fetch(url)
    return  request.json()
}


export {getImagesFromWord}