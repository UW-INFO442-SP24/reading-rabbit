import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Papa from 'papaparse';
import Proj from 'proj4';
import libraryIcon from './library.png';
import Draggable from 'react-draggable';

function MapComponent() {
    const [selectedLibrary, setSelectedLibrary] = useState(null);
    const [libraries, setLibraries] = useState([]);
    const [filteredLibraries, setFilteredLibraries] = useState([]);
    const [filterOption, setFilterOption] = useState('Monday');
    const mapRef = useRef(null);

    const sourceCRS = '+proj=lcc +lat_1=47.5 +lat_2=48.73333333333333 +lat_0=47 +lon_0=-120.83333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs';
    const targetCRS = 'EPSG:4326'; // WGS84 latitude/longitude

    const initMap = () => {
        if (!mapRef.current) {
            mapRef.current = L.map('map', {
                zoomControl: false
            }).setView([47.6062, -122.3321], 13);

            L.control.zoom({
                position: 'topright'
            }).addTo(mapRef.current);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors, © CartoDB'
            }).addTo(mapRef.current);
        }
    };

    const addMarkers = (libraries) => {
        if (mapRef.current) {
            libraries.forEach(library => {
                const marker = L.marker([library.lat, library.lon], { icon: customIcon }).addTo(mapRef.current);

                marker.on('mouseover', function () {
                    marker.bindPopup(`<b>${library.NAME} Branch</b>`).openPopup();
                });

                marker.on('click', function () {
                    setSelectedLibrary(library);
                    document.getElementById('map').classList.add('shift-left');
                    const libraryDetails = document.querySelector('.library-details');
                    if (libraryDetails) {
                        libraryDetails.classList.add('shift-left');
                    }
                });
            });
        }
    };

    const customIcon = L.icon({
        iconUrl: libraryIcon,
        iconSize: [32, 37]
    });

    const filterLibraries = () => {
        const filtered = libraries.filter(library => {
            const dayMapping = {
                'Monday': 'MONDAY_HOURS',
                'Tuesday': 'TUESDAY_HOURS',
                'Wednesday': 'WEDNESDAY_HOURS',
                'Thursday': 'THURSDAY_HOURS',
                'Friday': 'FRIDAY_HOURS',
                'Saturday': 'SATURDAY_HOURS',
                'Sunday': 'SUNDAY_HOURS',
                'Open on Weekends': ['SATURDAY_HOURS', 'SUNDAY_HOURS']
            };

            if (filterOption === 'Open on Weekends') {
                return dayMapping[filterOption].some(day => library[day].toLowerCase() !== 'closed');
            } else {
                const hours = library[dayMapping[filterOption]];
                return hours.toLowerCase() !== 'closed';
            }
        });

        setFilteredLibraries(filtered);
    };

    useEffect(() => {
        initMap();
        fetch('/seattle_libraries.csv')
            .then(response => response.text())
            .then(csv => {
                Papa.parse(csv, {
                    header: true,
                    complete: results => {
                        const libraryData = results.data.map(library => {
                            const X = parseFloat(library.X);
                            const Y = parseFloat(library.Y);

                            if (!isNaN(X) && !isNaN(Y)) {
                                const sourceCoords = [X, Y];
                                const targetCoords = Proj(sourceCRS, targetCRS, sourceCoords);
                                return { ...library, lat: targetCoords[1], lon: targetCoords[0] };
                            }
                            return null;
                        }).filter(library => library !== null);

                        setLibraries(libraryData);
                        setFilteredLibraries(libraryData);
                        addMarkers(libraryData);
                    }
                });
            });
    }, []);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.eachLayer(layer => {
                if (layer instanceof L.Marker) {
                    mapRef.current.removeLayer(layer);
                }
            });
            addMarkers(filteredLibraries);
        }
    }, [filteredLibraries]);

    useEffect(() => {
        filterLibraries();
    }, [filterOption]);

    const handleCloseClick = () => {
        setSelectedLibrary(null);
        document.getElementById('map').classList.remove('shift-left');
        const libraryDetails = document.querySelector('.library-details');
        if (libraryDetails) {
            libraryDetails.classList.remove('shift-left');
        }
    };

    return (
        <div className="map-page">
            <div className="map"></div>
            <div id="map" className="map"></div>
            <div style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000 }}>
            <div className="space"></div>
                <Draggable>
                    <div className="filter-controls">
                        <label>
                            Open:
                            <select value={filterOption} onChange={e => setFilterOption(e.target.value)}>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Open on Weekends">Open on Weekends</option>
                            </select>
                        </label>
                        <button onClick={filterLibraries}>Filter</button>
                    </div>
                </Draggable>
            </div>
            {selectedLibrary && (
                <div className={`library-details ${selectedLibrary ? 'shift-left' : ''}`}>
                    <button className="close-button" onClick={handleCloseClick}>X</button>
                    <h2>{selectedLibrary.NAME} Branch</h2>
                    <p><strong>Address:</strong> {selectedLibrary.ADDRESS}</p>
                    <p><strong>Website:</strong> <a href={selectedLibrary.WEBSITE} target="_blank" rel="noopener noreferrer">Visit</a></p>
                    <p><strong>Phone:</strong> {selectedLibrary.PHONE}</p>
                    <p><strong>Hours:</strong></p>
                    <ul>
                        <li><strong>Mon:</strong> <span>{selectedLibrary['MONDAY_HOURS']}</span></li>
                        <li><strong>Tue:</strong> <span>{selectedLibrary['TUESDAY_HOURS']}</span></li>
                        <li><strong>Wed:</strong> <span>{selectedLibrary['WEDNESDAY_HOURS']}</span></li>
                        <li><strong>Thu:</strong> <span>{selectedLibrary['THURSDAY_HOURS']}</span></li>
                        <li><strong>Fri:</strong> <span>{selectedLibrary['FRIDAY_HOURS']}</span></li>
                        <li><strong>Sat:</strong> <span>{selectedLibrary['SATURDAY_HOURS']}</span></li>
                        <li><strong>Sun:</strong> <span>{selectedLibrary['SUNDAY_HOURS']}</span></li>
                    </ul>
                    <p><strong>Book Returns:</strong> {selectedLibrary.BOOK_RETURNS}</p>
                </div>
            )}
        </div>
    );
}

export default MapComponent;