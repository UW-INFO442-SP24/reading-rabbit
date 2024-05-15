import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from 'papaparse';
import Proj from 'proj4';
import libraryIcon from './library.png'; // Import the library icon

function MapComponent() {
    const initMap = () => {
        const map = L.map('map').setView([47.6062, -122.3321], 13);

        const sourceCRS = '+proj=lcc +lat_1=47.5 +lat_2=48.73333333333333 +lat_0=47 +lon_0=-120.83333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs';
        const targetCRS = 'EPSG:4326'; // WGS84 latitude/longitude

        const customIcon = L.icon({
            iconUrl: libraryIcon,
            iconSize: [32, 37] // Adjust the size as needed
        });

        // CartoDB Voyager tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors, © CartoDB'
        }).addTo(map);

        // Fetch and parse the CSV data from the public directory
        fetch('/seattle_libraries.csv')
            .then(response => response.text())
            .then(csv => {
                Papa.parse(csv, {
                    header: true,
                    complete: results => {
                        results.data.forEach(library => {
                            const X = parseFloat(library.X);
                            const Y = parseFloat(library.Y);

                            if (!isNaN(X) && !isNaN(Y)) {
                                const sourceCoords = [X, Y];
                                const targetCoords = Proj(sourceCRS, targetCRS, sourceCoords);
                                const marker = L.marker([targetCoords[1], targetCoords[0]], { icon: customIcon }).addTo(map);
                                marker.bindPopup(`
                                    <b>${library.NAME} Branch</b><br>
                                    ${library.ADDRESS}<br>
                                    <a href="${library.WEBSITE}" target="_blank">Website</a>
                                `);
                            }
                        });
                    }
                });
            });
    };

    React.useEffect(() => {
        initMap();
    }, []);

    return (
        <div>
            <div className="space"></div>
            <div id="map"></div>
        </div>

    );
}

export default MapComponent;