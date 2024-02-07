import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import CarImage from "../assets/Tesla_Model3.png";
import BorneImage from "../assets/Marseille_Place_Castellane.jpg";
import Footer from "../components/Footer";

import ProfilForm from "../components/Forms/ProfilForms";
import "./ProfilPage.css";

function profilPage() {
  const { connected } = useContext(AuthContext);
  const { path } = useParams();

  return (
    <div>
      <div className="containerCR">
        <div className="carContainer">
          <h1>Profil</h1>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/public/assets/images/${
              connected.profil.image
            }`}
            className="carImage"
            alt={`${connected.profil.name} avatar`}
          />
          <div className="descriptionContainer">
            <h2>
              {connected.profil.name} {connected.profil.lastname}
            </h2>
          </div>
          {path !== "profil" && (
            <button type="button" className="upButton">
              <Link to="/user/profil"> Modifier le profil</Link>
            </button>
          )}
        </div>
        <div className="carContainer">
          <h1>Ma voiture</h1>
          <img src={CarImage} className="carImage" alt="carImage" />
          <div className="descriptionContainer">
            <h2>Tesla</h2>
            <p>Model 3</p>
            <p>AB-123-CD</p>
          </div>
          {path !== "car" && (
            <button type="button" className="upButton">
              <Link to="/user/car"> Modifier la voiture </Link>
            </button>
          )}
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
        <ProfilForm
          mail={connected.connected.mail}
          image={connected.profil.image}
        />
      </div>
      <Footer />
    </div>
  );
}

export default profilPage;
