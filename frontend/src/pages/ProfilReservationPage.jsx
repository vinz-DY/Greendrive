import React from "react";
import BorneImage from "../assets/Marseille_Place_Castellane.jpg";
import Footer from "../components/Footer";
import ProfilPicture from "../assets/yavuz.png";
import "./ProfilPage.css";

function profilPage() {
  return (
    <div>
      <div className="containerCR">
        <div className="carContainer">
          <h1>Ma voiture</h1>
          <img src={ProfilPicture} className="carImage" alt="carImage" />
          <div className="descriptionContainer">
            <h2>Tesla</h2>
            <p>Model 3</p>
            <p>AB-123-CD</p>
          </div>
          <button type="button" className="upButton">
            Modifier la voiture
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
          <label className="profilLabel" aria-label="mail">
            <input
              className="profilMail"
              type="email"
              placeholder="Adresse Mail"
            />
          </label>
          <label className="profilLabel" aria-label="postalCode">
            <input
              className="profilPostalCode"
              type="text"
              placeholder="Code Postal"
            />
          </label>
          <label className="profilLabel" aria-label="city">
            <input className="profilCity" type="text" placeholder="Ville" />
          </label>
          <label className="profilLabel" aria-label="password">
            <input
              className="profilPassword"
              type="password"
              placeholder="Mot de passe"
            />
          </label>
          <label className="profilLabel" aria-label="passwordConfirmation">
            <input
              className="profilPasswordConfirmation"
              type="password"
              placeholder="Confirmation du mot de passe"
            />
          </label>
          <button type="submit" className="submitButton">
            Modifier mon profil
          </button>
        </form>
        <div className="profilPicture">
          <img src={ProfilPicture} alt="ProfilPicture" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default profilPage;
