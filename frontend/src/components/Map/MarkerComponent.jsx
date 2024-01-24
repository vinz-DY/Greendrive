import React from "react";
import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

function MarkerComponent({ marker, onClick }) {
  return (
    <Marker
      position={[parseFloat(marker.ylatitude), parseFloat(marker.xlongitude)]}
      onClick={() => onClick(marker)}
    >
      <Popup>
        <h2>Informations sur la borne</h2>
        <ul>
          <li>Adresse: {marker.city}</li>
          <li>Accessibilité: {marker.access}</li>
          <li>Type de prise: {marker.connectic_id}</li>
          <li>Puissance maximale: {marker.power}</li>
          <li>Accès à la borne: {marker.acces_recharge}</li>
        </ul>
      </Popup>
    </Marker>
  );
}

MarkerComponent.propTypes = {
  marker: PropTypes.shape({
    ylatitude: PropTypes.string,
    xlongitude: PropTypes.string,
    city: PropTypes.string,
    access: PropTypes.string,
    connectic_id: PropTypes.number,
    power: PropTypes.string,
    acces_recharge: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MarkerComponent;
