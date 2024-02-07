import React, { useState } from "react";
import PropTypes from "prop-types";
import connexion from "../../services/connexion";

function ProfilForms({ mail, image }) {
  const [profilData, setProfilData] = useState({
    mail,
    oldpassword: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleInputChange = (e) => {
    setProfilData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateProfil = async (e) => {
    e.preventDefault();

    try {
      await connexion.put(`/api/users/`, profilData);
    } catch (error) {
      console.error("Error updating profil:", error);
    }
  };

  return (
    <>
      <form className="profilUpdate" onSubmit={handleUpdateProfil}>
        <label className="profilLabel" aria-label="mail">
          <input
            className="profilInput"
            type="email"
            placeholder="Adresse Mail"
            name="mail"
            value={profilData.mail}
            onChange={handleInputChange}
          />
        </label>
        <label className="profilLabel" aria-label="password">
          <input
            className="profilInput"
            type="password"
            placeholder="Ancien mot de passe"
            name="oldpassword"
            value={profilData.oldpassword}
            onChange={handleInputChange}
          />
        </label>
        <label className="profilLabel" aria-label="password">
          <input
            className="profilInput"
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={profilData.password}
            onChange={handleInputChange}
          />
        </label>
        <label className="profilLabel" aria-label="passwordConfirmation">
          <input
            className="profilInput"
            type="password"
            placeholder="Confirmation du mot de passe"
            name="passwordConfirmation"
            value={profilData.passwordConfirmation}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="submitButton">
          Modifier mon profil
        </button>
      </form>
      <div className="profilPicture">
        <img
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/public/assets/images/${image}`}
          alt="ProfilPicture"
        />
      </div>
    </>
  );
}

ProfilForms.propTypes = {
  mail: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProfilForms;
