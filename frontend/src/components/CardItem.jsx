import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardItem({ data }) {
  return (
    <div>
      <Link to={`${data.id}`}>
        <img src={data.image} alt="borne" style={{ cursor: "pointer" }} />
      </Link>
      <h2>{data.id}</h2>
      <h2>{data.city}</h2>
      <h2>{data.name}</h2>
      <h2>{data.lastname}</h2>
      <h2>{data.birthdate}</h2>
      <h2>{data.user_id}</h2>
    </div>
  );
}

CardItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    adresseStation: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    acces_recharge: PropTypes.string.isRequired,
    access: PropTypes.string.isRequired,
    localisation: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    brand: PropTypes.string,
    engine: PropTypes.string,
    fonction_id: PropTypes.string,
  }).isRequired,
};

export default CardItem;
