import { createContext, useState } from "react";
const initialCardContext = [];
export const TechContext = createContext(initialCardContext);

export const AdProvider = ({ children }) => {
  const [licencia, setLicencia] = useState([]);

  const addLicencia = (item) => {
    let itemLic = item;
    setLicencia(itemLic);
  };
  return (
    <TechContext.Provider value={{ addLicencia, licencia }}>
      {children}
    </TechContext.Provider>
  );
};
