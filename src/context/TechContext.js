import { createContext } from "react";
const initialCardContext = [];
export const TechContext = createContext(initialCardContext);
export const AdProvider = ({ children }) => {
  return <TechContext.Provider value={{}}>{children}</TechContext.Provider>;
};
