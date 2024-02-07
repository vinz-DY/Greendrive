import React from "react";

function CarForm() {
  return (
    <form className="profilUpdate">
      <label className="profilLabel" aria-label="brand">
        <input className="profilInput" type="text" placeholder="Marque" />
      </label>
      <label className="profilLabel" aria-label="model">
        <input className="profilInput" type="text" placeholder="Modèle" />
      </label>
      <label className="profilLabel" aria-label="licensePlate">
        <input
          className="profilInput"
          type="text"
          placeholder="Numéro d'immatriculation"
        />
      </label>
      <button type="submit" className="submitButton">
        Modifier ma voiture
      </button>
    </form>
  );
}

export default CarForm;
