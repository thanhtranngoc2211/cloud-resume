'use client'

import { useState, useEffect } from 'react'

export default function VisitorCounter() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
  
            // fetch('https://oydsr9nyk8.execute-api.ap-east-1.amazonaws.com/dev/counter-api')
            //     .then((res) => res.json())
            //     .then((data) => {
            //         setData(data)
            //         setLoading(false)
            //         setApiCalled(true) // Đánh dấu rằng API đã được gọi
            //     })

            console.log('called')

    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>Totally this page has {JSON.parse(data.body).N} visitor!!!</div>
    )
}