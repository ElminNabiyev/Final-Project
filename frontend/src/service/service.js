export async function getAll() {
    const res = await fetch("http://localhost:4000/api/games")
    const data = await res.json()
    return data
}