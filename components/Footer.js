"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Pencil,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import config from "@/config";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de logos/partners ficticios
  const partners = [
    { name: "Secretaría de Gobierno", id: 1 },
    { name: "Registro Civil", id: 2 },
    { name: "Secretaría de Hacienda", id: 3 },
    { name: "Recaudación de Rentas", id: 4 },
    { name: "Tránsito Municipal", id: 5 },
    { name: "Desarrollo Urbano", id: 6 },
    { name: "Servicios Públicos", id: 7 },
    { name: "Tesorería Municipal", id: 8 },
  ];

  // Mostrar 4 partners en desktop, 2 en mobile
  const visiblePartners = 4;
  const maxIndex = partners.length - visiblePartners;

  // Función para navegar el carrusel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  // Auto-scroll del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Carrusel de logotipos */}
      <div className="py-6 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex-1 overflow-hidden mx-4">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visiblePartners)
                  }%)`,
                }}
              >
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex-none w-1/2 md:w-1/4 px-2"
                  >
                    <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg h-20">
                      <div className="w-8 h-8 mr-2 bg-blue-600 rounded-full flex items-center justify-center">
                        <Pencil size={16} />
                      </div>
                      <span className="text-sm font-medium">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Pencil size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">{config.appName}</span>
            </Link>

            <p className="text-gray-400 text-sm">
              Simplificando trámites gubernamentales para todos los ciudadanos
              con nuestra asistencia inteligente.
            </p>

            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} {config.appName}. Todos los derechos
              reservados.
            </p>
          </div>

          {/* Enlaces útiles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Útiles</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ASK"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chatbot de Asistencia
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400" />
                <a
                  href={`mailto:${
                    config.mailgun.supportEmail || "soporte@ejemplo.com"
                  }`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {config.mailgun.supportEmail || "soporte@ejemplo.com"}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-400">+52 614 123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-400">
                  calle falsa 123, Chihuahua, Chihuahua, México
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
