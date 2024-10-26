// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export async function getMeaning(word: string) {
  const url = baseUrl + word
  try {
    const response = await fetch(url)
    if (response.ok === false) {
      throw new Error()
    }
    return await response.json()
  } catch (err) {
    // throw new Error((err as Error).message)
    throw new Error()
  }
}
