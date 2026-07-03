import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CONTACT_DETAILS } from "../data/contact";

const LOCATION = [31.370611, 75.546967];

export default function LocationMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: LOCATION,
      zoom: 17,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
      {
        subdomains: "abcd",
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    ).addTo(map);

    const marker = L.divIcon({
      className: "delta-map-marker",
      html: `<span class="delta-map-pin"></span>`,
      iconSize: [34, 46],
      iconAnchor: [17, 46],
    });

    const locationMarker = L.marker(LOCATION, {
      icon: marker,
      riseOnHover: true,
    })
      .addTo(map)
      .bindPopup(
        `<strong>Delta Impex Inc.</strong><br/>${CONTACT_DETAILS.address}`,
        {
          className: "delta-map-popup",
          minWidth: 300,
          maxWidth: 360,
          // Keep the popup above the marker with enough clearance for the
          // complete pin to remain visible.
          offset: L.point(0, -46),
          autoPanPadding: L.point(30, 30),
        },
      );

    locationMarker.on("mouseover", () => {
      locationMarker.openPopup();
    });

    locationMarker.openPopup();

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-testid="location-map"
      className="relative z-0 isolate h-full w-full"
      aria-label="Interactive map showing Delta Impex Inc. location"
    />
  );
}
