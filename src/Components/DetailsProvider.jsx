import { createContext, useState } from "react";

export const DetailsContext = createContext();

// eslint-disable-next-line react/prop-types
function DetailsProvider({ children }) {
  const [countries, setCountries] = useState([]);
  return (
    <DetailsContext.Provider value={{ countries, setCountries }}>
      {children}
    </DetailsContext.Provider>
  );
}

export default DetailsProvider;
