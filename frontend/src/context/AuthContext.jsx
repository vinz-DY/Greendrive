import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [connected, setConnected] = useState({
    connected: {
      id: 11,
      mail: "sam.lake@hotmail.com",
      role: 0,
    },
    profil: {
      id: 11,
      lastname: "LAKE",
      name: "Sam",
      gender: "male",
      birthdate: "1972-03-16",
      postCode: "21000",
      cityProfil: "Dijon",
      image: "yavuz.png",
      user_id: 11,
    },
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ connected, setConnected }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
