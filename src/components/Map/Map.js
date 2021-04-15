import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import Loader from '../Loader/Loader';
import Icon from '../../images/icon-location.svg'
import './Map.css';

function Map({ ipInfo, loading, error }) {

  const arr = [ipInfo.location.lat, ipInfo.location.lng];

  return (
    <section>
      {loading || error ?
        <Loader error={error} /> :
        <MapContainer
          id="mapid"
          center={arr}
          zoom={15}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <ZoomControl position='bottomright' /> */}
          <Marker position={arr}>
          </Marker>
        </MapContainer>
      }
    </section>
  )
}

export default Map;