import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import 'leaflet/dist/leaflet.css'
import './map.css'
import '../utils/fix-map-icon'

export const Map = () => {

    return (
        <div className='map'>
            <MapContainer center={[52.526889550917176, 19.67838484886835]} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.54402843689452, 19.689938079197297]}>
            <Popup>
                <h2>Kino</h2>
                <p>Fajne kino z tradycjami</p>
            </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}