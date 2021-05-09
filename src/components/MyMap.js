import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

const Wrapper = styled.div`
  #mapid {
    width: 100%;
    height: 39.5rem;
    object-fit: cover;
    z-index: 1;
  }
`;

const MyMap = () => {
  return (
    <Wrapper>
      <MapContainer id='mapid' center={[51.505, -0.09]} zoom={14}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

export default MyMap;
