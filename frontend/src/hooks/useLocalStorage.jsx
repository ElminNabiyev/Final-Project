import { useEffect } from 'react'
import { useState } from 'react'

function useLocalStorage(key, initial) {
    const [data, setData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initial)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [data, key])
    return [data, setData]
}

export default useLocalStorage