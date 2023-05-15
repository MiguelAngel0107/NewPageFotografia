import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative mx-24 mb-6">
      <div className="mt-9 bg-white text-black px-4 py-2 rounded-full shadow-black shadow-mk relative overflow-hidden">
        <div className="flex items-center justify-between ">
          <h1 className="flex gap-2 justify-start px-2 font-bold text-lg">
            CM ART´S PRODUCCIONES
          </h1>

          <ul className="flex gap-3 z-10 pr-4">
            <li className="bg-gray-50 px-2 py-1 rounded-full shadow-black shadow-btnH drop-shadow-xl font-semibold hover:bg-gray-200">
              <Link href="#">Facebbok</Link>
            </li>
            <li className="bg-gray-50 px-2 py-1 rounded-full shadow-black shadow-btnH drop-shadow-xl font-semibold hover:bg-gray-200">
              <Link href="#">Tiktok</Link>
            </li>
            <li className="bg-gray-50 px-2 py-1 rounded-full shadow-black shadow-btnH drop-shadow-xl font-semibold hover:bg-gray-200">
              <Link href="#">Instagram</Link>
            </li>
          </ul>

          <p class=" flex gap-2 justify-end text-sm py-1 text-black">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
