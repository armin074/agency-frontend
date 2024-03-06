<template>
    <div id="map" class="leaflet-map"></div>
  </template>
  
  <script>
  import { onMounted, nextTick } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  export default {
    setup() {
      onMounted(async () => {
        // Initialize map
        const map = L.map('map').setView([48.223230, 16.504580], 20);
  
        // Add tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
  
        // Add marker
        L.marker([48.223230, 16.504580]).addTo(map)
          .bindPopup('CultStaff - Maria Trapp Platz 1/106 1220 WIEN')
          .openPopup();
  
        // Resize map after the next DOM update cycle
        await nextTick();
        map.invalidateSize();
      });
  
      return {};
    },
  };
  </script>
  
  <style scoped>
  /* Style the map container */
  .leaflet-map {
    height: 100%;
    border: 1px solid #e9531d;
    
    width: 100%;
  }
  </style>
  