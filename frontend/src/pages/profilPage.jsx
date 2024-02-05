import React, { useState } from "react";
import { Link /* useParams */ } from "react-router-dom";
/* import connexion from "../services/connexion"; */
import CarImage from "../assets/Tesla_Model3.png";
import BorneImage from "../assets/Marseille_Place_Castellane.jpg";
import Footer from "../components/Footer";
import ProfilPicture from "../assets/yavuz.png";
import "./ProfilPage.css";

function profilPage() {
  const [profilData, setProfilData] = useState(null);
  /*
  useEffect(() => {
    const fetchProfilData = async () => {
      try {
        const response = await connexion.get(`/profil/${id}`);
        setProfilData(response.data);
      } catch (error) {
        console.error("Error fetching profil data:", error);
      }
    };

    fetchProfilData();
  });
  */

  const handleInputChange = (e) => {
    setProfilData({
      ...profilData,
      [e.target.name]: e.target.value,
    });
  };

  /*
  const handleUpdateProfil = async (e) => {
    e.preventDefault();

    try {
      const response = await connexion.put(`/api/profils/${id}`, profilData);

      console.log(response.data);
    } catch (error) {
      console.error("Error updating profil:", error);
    }
  };
  */

  return (
    <div>
      <div className="containerCR">
        <div className="carContainer">
          <h1>Ma voiture</h1>
          <img src={CarImage} className="carImage" alt="carImage" />
          <div className="descriptionContainer">
            <h2>Tesla</h2>
            <p>Model 3</p>
            <p>AB-123-CD</p>
          </div>
          <button type="button" className="upButton">
            <Link to="/profilCarPage"> Modifier la voiture </Link>
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
              className="profilInput"
              type="email"
              placeholder="Adresse Mail"
              onChange={handleInputChange}
            />
          </label>
          <label className="profilLabel" aria-label="postalCode">
            <input
              className="profilInput"
              type="text"
              placeholder="Code Postal"
            />
          </label>
          <label className="profilLabel" aria-label="city">
            <input className="profilInput" type="text" placeholder="Ville" />
          </label>
          <label className="profilLabel" aria-label="password">
            <input
              className="profilInput"
              type="password"
              placeholder="Mot de passe"
            />
          </label>
          <label className="profilLabel" aria-label="passwordConfirmation">
            <input
              className="profilInput"
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
