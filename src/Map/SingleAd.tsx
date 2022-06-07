import React, { useEffect, useState } from 'react'
import { AdEntity } from 'types'


interface Props {
    id: string;
}

export const SingleAd = (props: Props) => {
    
    const [ad, setAd] = useState<AdEntity | null>(null)

    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`http://localhost:3001/ad/${props.id}`)
            const data = await res.json()

            setAd(data)
        })()
    },[])

    if(ad===null){
        return <p>Please wait...</p>
        } 
        return (
            <>
                <h2>{ad.name}</h2>
                <h3>{ad.description}</h3>
            </>

        )
}