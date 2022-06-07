import React, { useContext, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { SearchContext } from '../context/Context'
import {SimpleAdEntity} from 'types'
import { SingleAd } from './SingleAd'

import 'leaflet/dist/leaflet.css'
import './map.css'
import '../utils/fix-map-icon'



export const Map = () => {

    const {search} = useContext(SearchContext)
    const [ads, setAds] = useState<SimpleAdEntity[]>([])
    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`http://localhost:3001/ad/search/${search}`)
            const data = await res.json()

            setAds(data)
        })()
    }, [search])

    return (
        <div className='map'>
            <MapContainer center={[52.526889550917176, 19.67838484886835]} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            ads.map(ad=>(
                <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                <Popup>
                    <SingleAd id={ad.id}/>
                </Popup>
                </Marker>
            ))}
            
            </MapContainer>
        </div>
    )
}