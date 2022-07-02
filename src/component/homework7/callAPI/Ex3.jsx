import React, { useEffect, useState } from 'react'

const Ex3 = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        const fetchAPIEx3 = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos")
            const data = await response.json()
            setPhotos(data)
        }
        fetchAPIEx3()
    }, [])
    return (
        <div>
            {
                photos.map((photo) => {
                    return <p key={photo.id}>{photo.id}</p>
                })
            }
        </div>
    )
}

export default Ex3