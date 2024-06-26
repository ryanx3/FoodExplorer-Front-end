import { createContext, useContext, useState } from "react";

const SideMenuContext = createContext();

export function SideMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SideMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </SideMenuContext.Provider>
  );
}

export const useSideMenu = () => useContext(SideMenuContext);
