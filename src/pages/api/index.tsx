export default async function fetchData(endpoint: string) {
    const url = `https://api.sbjmedical.uz/api/${endpoint}`
    try {
        const response = await fetch(url)
        return response.json()
    } catch (err) {
        console.log(err)
    }
}