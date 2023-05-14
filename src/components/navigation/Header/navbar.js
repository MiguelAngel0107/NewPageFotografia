import React from "react";

function Navbar() {
  return (
    <>
      <nav className="mt-9 bg-white text-black p-4 rounded-full shadow-black shadow-mk drop-shadow-xl">
        <div className="flex">
          <h1 className="flex gap-2 justify-start px-2 font-bold text-2xl">CM ART´S PRODUCCIONES</h1>
          <ul className="flex gap-2 ml-auto">
            <li className="bg-gray-200 px-2 py-1 rounded-full items-end">
              <a href="#">Inicio</a>
            </li>
            <li className="bg-gray-200 px-2 py-1 rounded-full">
              <a href="#">Servicios</a>
            </li>
            <li className="bg-gray-200 px-2 py-1 rounded-full">
              <a href="#">Portafolio</a>
            </li>
            <li className="bg-gray-200 px-2 py-1 rounded-full">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex items-center justify-center -mt-20 mx-auto z-10 bg-white w-28 h-28 text-black p-1 rounded-full shadow-black shadow-logo drop-shadow-sm">
        <img src="/images/logo.png" alt="Logo" />
      </div>
    </>
  );
}

export default Navbar;
