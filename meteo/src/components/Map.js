import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // Assicurati di avere il CSS importato

const Map = ({ latitude, longitude }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.remove();
        }

        // Crea la mappa e imposta il centro e lo zoom
        const map = L.map('map').setView([latitude, longitude], 13);

        // Aggiungi il layer della mappa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Aggiorna la mappaRef con la nuova mappa
        mapRef.current = map;
    }, [latitude, longitude]);

    return (
        <div id="map" className="map-container"></div>
    );
};

export default Map;
