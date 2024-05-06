import React, { useEffect } from 'react';
import '../../style.css';
import L from 'leaflet';

export function Map() {
    useEffect(() => {
        var map = L.map('map').setView([47.60, -122.33], 11);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }, []);
    return (
        <div id="map"></div>
    );
}

export default Map;