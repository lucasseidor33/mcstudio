"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import logo from "../../public/img/logo.png"

export function Navbar({ setIsOpen }:any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para manejar la apertura y cierre del menú
  const openToggleMenu = () => {
    setIsMenuOpen(false)
    setIsOpen(false)
  }

  const closeToggleMenu = () => {
    setIsMenuOpen(true)
    setIsOpen(true)
  }

  // Función para cerrar el menú cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 ${isMenuOpen ? 'backdrop-blur-3xl' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo centrado */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-start space-x-2">
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#hero" className="text-gray-200 hover:text-primary">Inicio</Link>
            <Link href="#projects" className="text-gray-200 hover:text-primary">Servicios</Link>
            <Link href="#clients" className="text-gray-200 hover:text-primary">Clientes</Link>
            <Link href="#planes" className="block py-2 text-white bg-primary rounded-md hover:bg-primary/90 text-center">
              Planes
            </Link>
            <Link href="#contact" className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90">
              Contactar
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden absolute right-4 z-20">
            {isMenuOpen ? (
              <button onClick={openToggleMenu} className="text-gray-200 hover:text-gray-300 focus:outline-none">
                <X className="h-6 w-6" />
              </button>
            ) : (
              <button onClick={closeToggleMenu} className="text-gray-200 hover:text-gray-300 focus:outline-none">
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 h-full w-full bg-white/10 backdrop-blur-3xl shadow-lg z-10">
            <div className="flex flex-col items-start justify-start h-full px-6 py-12 space-y-6">
              <Link href="#hero" onClick={handleLinkClick} className="text-gray-200 hover:text-primary text-xl">
                Inicio
              </Link>
              <Link href="#projects" onClick={handleLinkClick} className="text-gray-200 hover:text-primary text-xl">
                Servicios
              </Link>
              <Link href="#clients" onClick={handleLinkClick} className="text-gray-200 hover:text-primary text-xl">
                Cursos
              </Link>
              <Link href="#planes" onClick={handleLinkClick} className="text-white bg-primary rounded-md hover:bg-primary/90 text-xl py-2 px-6">
                Planes
              </Link>
              <Link href="#contact" onClick={handleLinkClick} className="text-white bg-primary rounded-md hover:bg-primary/90 text-xl py-2 px-6">
                Contactar
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
