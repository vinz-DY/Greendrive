import React from "react";
import { Link } from "react-router-dom";
import CarImage from "../assets/Tesla_Model3.png";
import BorneImage from "../assets/Marseille_Place_Castellane.jpg";
import Footer from "../components/Footer";
import ProfilPicture from "../assets/yavuz.png";
import "./ProfilPage.css";

function profilCarPage() {
  return (
    <div>
      <div className="containerCR">
        <div className="carContainer">
          <h1>Profil</h1>
          <img src={ProfilPicture} className="carImage" alt="carImage" />
          <div className="descriptionContainer">
            <h2>Yavuz Kutuk</h2>
          </div>
          <button type="button" className="upButton">
            <Link to="/user/car"> Modifier le profil</Link>
          </button>
        </div>
        <div className="borneContainer">
          <h1>Ma réservation</h1>
          <img src={BorneImage} className="borneImage" alt="BorneImage" />
          <div className="descriptionContainer">
            <h2>Marseille</h2>
            <p>Place Castellane</p>
            <p>Vendredi 17h30</p>
          </div>
          <button type="button" className="upButton">
            Modifier la réservation
          </button>
        </div>
      </div>
      <div className="containerProfil">
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
        <div className="profilPicture">
          <img src={CarImage} alt="ProfilPicture" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default profilCarPage;
