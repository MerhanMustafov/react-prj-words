export interface Definitions {
  noun: {d: string[], m?: string[], s?: string[], a?: string[], ex?: string[]}
  pronoun: {d: string[], m?: string[], s?: string[], a?: string[], ex?: string[]}
  verb: {d: string[], m?: string[], s?: string[], a?: string[], ex?: string[]}
  adjective: {d: string[], m?: string[], s?: string[], a?: string[], ex?: string[]}
  adverb: {d: string[], m?: string[], s?: string[], a?: string[], ex?: string[]}
  preposition: {d: string[], m?: string[], s?: string[], a?: string[], ex?: string[]}
  conjunction: {d: string[], m?: string[], s?: string[], a?: string[], ex?: string[]}
  interjection: {d: string[], m?: string[], s?: string[], a?: string[], ex?: string[]}

  phonetic:  string[] 
  audio: string[] 
}

interface Phonetics {
    text: string
    audio: string
    // sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=333689"
}

export interface ImageData {
  collections: number
  comments: number
  downloads: number
  id: number
  imageHeight: number
  imageSize: number
  imageWidth: number
  largeImageURL: string
  likes: number
  pageURL: string
  previewHeight: number
  previewURL: string
  previewWidth: number
  tags: string
  type: string
  user: string
  userImageURL: string
  user_id: number
  views: number
  webformatHeight: number
  webformatURL: string
  webformatWidth: number
}

