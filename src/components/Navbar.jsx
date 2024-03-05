import React, { useState } from "react";

function MiComponente() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <button id="menu-open" onClick={toggleMenu}>
        Abrir Menú
      </button>
      <div className="w-[100vh] h-[100%]">
        <button id="menu-close" onClick={toggleMenu}>
          Cerrar Menú
        </button>
        <div
          id="menu"
          style={{ visibility: menuVisible ? "visible" : "hidden" }}
        >
          {/* Contenido del menú */}
          <ul>
            <li>Opción 1</li>
            <li>Opción 2</li>
            <li>Opción 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MiComponente;
