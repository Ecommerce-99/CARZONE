import { createContext, useState } from "react";

export const BrandContext = createContext();

export function BrandProvider({ children }) {
  const [brand, setBrand] = useState();

  return (
    <>
      <BrandContext.Provider value={[brand, setBrand]}>
        {children}
      </BrandContext.Provider>
    </>
  );
}
