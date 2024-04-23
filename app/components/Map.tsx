"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { useCountries } from "../lib/getCountries";
import { icon } from "leaflet";
import marker from "../../public/marker.png";

const ICON = icon({
  iconUrl:
    "https://imgs.search.brave.com/xIYtfEx7viNgl8AWWpFpW1Fd2fyGtT75jNCUcj7B_Bc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lbWFz/c2kuZnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTcvMTAvTWFw/LU1hcmtlci1QTkct/RmlsZS0zMDB4MzAw/LnBuZw",
  iconSize: [40, 40],
});

function Map({ locationValue }: { locationValue: string }) {
  const { getCountryByValue } = useCountries();
  const latLang = getCountryByValue(locationValue)?.latLang;

  return (
    <MapContainer
      scrollWheelZoom={false}
      className="h-[50vh] rounded-lg relative z-0"
      center={latLang ?? [52.505, -0.09]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLang ?? [52.505, -0.09]} icon={ICON} />
    </MapContainer>
  );
}

export default Map;
