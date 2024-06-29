export async function getAll() {
    const res = await fetch("http://localhost:4000/api/games")
    const data = await res.json()
    return data
}
export async function getID(id) {
    const res = await fetch("http://localhost:4000/api/games/" + id)
    const data = await res.json()
    return data
}
export async function deleteBtID(id) {
    const res = await fetch("http://localhost:4000/api/games/" + id, { method: "delete" })
    const data = await res.json()
    return data
}
export async function updateDatas(val, id) {
    const res = await fetch("http://localhost:4000/api/games/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(val),
    });
    const data = await res.json()
    return data
}
export async function addDatas(val) {
    const res = await fetch("http://localhost:4000/api/games/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(val),
    });
    const data = await res.json()
    return data
}