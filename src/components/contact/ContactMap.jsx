'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create the custom icon using the requested logo
const customIcon = new L.Icon({
  iconUrl: '/icons/logo (8).svg',
  iconSize: [46, 74.34],
  iconAnchor: [28, 74.34], // Anchors the bottom center of the logo to the exact coordinate
  popupAnchor: [0, -74.34],
});

const blinkingDotIcon = new L.divIcon({
  className: 'custom-blinking-dot',
  html: '<div class="pulsing-dot"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7], // perfectly centered on the coordinate
});

export default function ContactMap({ center, zoom }) {
  return (
    <>
      <style>{`
        .custom-blinking-dot {
          background: transparent;
          border: none;
        }
        .pulsing-dot {
          width: 14px;
          height: 14px;
          background-color: #4c5e7aff; /* Premium Google-Maps-like blue */
          border-radius: 50%;
          position: relative;
          box-shadow: 0 0 0 2px #ffffff;
        }
        .pulsing-dot::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #353a42ff;
          border-radius: 50%;
          animation: pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          z-index: -1;
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ width: '100%', height: '100%', zIndex: 1 }}
      >
        {/* Light, premium-looking CartoDB tiles as requested */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        
        {/* The blinking blue dot exactly on the location */}
        <Marker position={center} icon={blinkingDotIcon} interactive={false} />

        {/* The custom logo anchored above the blinking dot */}
        <Marker position={center} icon={customIcon}>
          <Popup>
            <strong>Chameri Builders</strong>
            <br />
            #27/205, Madapeedika, Paral (PO)
            <br />
            Thalasserry, Kannur, Kerala
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
