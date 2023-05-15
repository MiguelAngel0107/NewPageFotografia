import React from "react";
import Link from "next/link";

function Navbar() {
  const buttons = [
    {
      id: 0,
      nombre: "Home",
      href: "#",
    },
    {
      id: 1,
      nombre: "Nosotros",
      href: "#",
    },
    {
      id: 2,
      nombre: "Contacto",
      href: "#",
    },
    {
      id: 3,
      nombre: "Precios",
      href: "#",
    },
  ];

  return (
    <div className="group">
      <nav className="mt-9 bg-white text-black p-4 rounded-full shadow-black shadow-mk relative overflow-hidden">
        <div className="flex">
          <h1 className="flex gap-2 justify-start px-2 font-bold text-2xl z-10">
            CM ART´S PRODUCCIONES
          </h1>
          {/* <span className="absolute rounded-full bg-blue-200 h-full w-0 left-0 top-0 transition-all duration-1500 group-hover:w-full group-hover:duration-500" />
          <span className="absolute bg-white h-full w-0 left-0 top-0 transition-all duration-500 group-hover:w-full group-hover:duration-1500" />*/}

          <ul className="flex gap-3 ml-auto z-10 pr-4">
            {buttons.map((item) => {
              return (
                <li
                  key={item.id}
                  className="bg-gray-50 px-2 py-1 rounded-full shadow-black shadow-btn drop-shadow-xl hover:shadow-btnH font-semibold"
                >
                  <Link href={`${item.href}`} >{item.nombre}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className="flex items-center justify-center -mt-20 mx-auto z-20 bg-white w-28 h-28 text-black p-1 rounded-full shadow-black shadow-logo drop-shadow-sm">
        <img src="/images/logo.png" alt="Logo" />
      </div>
    </div>
  );
}

export default Navbar;
