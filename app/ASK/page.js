"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { ChevronDown, ChevronUp, Mail, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Para qué sirve esta plataforma?",
      answer: (
        <div className="space-y-3">
          <p>
            Esta plataforma tiene como objetivo principal brindar orientación
            clara y precisa sobre trámites gubernamentales en el estado de
            Chihuahua.
          </p>
          <p>
            Nuestro asistente virtual utiliza tecnología de inteligencia
            artificial para proporcionar información actualizada sobre
            requisitos, costos, plazos y procedimientos relacionados con
            diversos trámites ante dependencias gubernamentales.
          </p>
          <p>
            Buscamos simplificar la experiencia ciudadana al interactuar con las
            instituciones gubernamentales, facilitando el acceso a la
            información que necesitas de manera rápida y confiable.
          </p>
        </div>
      ),
    },
    {
      question: "¿Qué trámites y secretarías están incluidos?",
      answer: (
        <div className="space-y-3">
          <p>
            Actualmente, nos enfocamos principalmente en trámites vehiculares
            relacionados con la <strong>Secretaría de Hacienda</strong>,
            específicamente de <strong>Recaudación de Rentas</strong> en
            Chihuahua.
          </p>
          <p>
            Estamos trabajando continuamente para ampliar nuestra base de
            conocimientos e ir incorporando progresivamente más secretarías y
            tipos de trámites, incluyendo:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Registro Civil</li>
            <li>Secretaría de Educación</li>
            <li>Desarrollo Urbano</li>
            <li>Servicios de Salud</li>
            <li>Entre otras dependencias estatales y municipales</li>
          </ul>
          <p>
            Te invitamos a visitarnos regularmente para conocer las
            actualizaciones y nuevos trámites disponibles en nuestro sistema.
          </p>
        </div>
      ),
    },
    {
      question: "¿La información proporcionada es oficial?",
      answer: (
        <div className="space-y-3">
          <p>
            Toda la información proporcionada en esta plataforma está basada en
            las leyes, reglamentos y disposiciones oficiales vigentes del estado
            de Chihuahua.
          </p>
          <p>
            Nuestro equipo se mantiene actualizado sobre los cambios en la
            legislación y procedimientos administrativos para asegurar que la
            información sea precisa y confiable.
          </p>
          <p>
            Sin embargo, te recomendamos verificar siempre con la dependencia
            correspondiente, especialmente para trámites complejos o en caso de
            requisitos especiales.
          </p>
        </div>
      ),
    },
    {
      question: "¿Cómo funciona el asistente virtual?",
      answer: (
        <div className="space-y-3">
          <p>
            Nuestro asistente virtual está potenciado por una avanzada
            inteligencia artificial especialmente entrenada para comprender y
            responder preguntas sobre trámites gubernamentales en Chihuahua.
          </p>
          <p>
            La IA ha sido alimentada con información oficial, formatos,
            requisitos y procedimientos de las diversas dependencias, lo que le
            permite:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responder consultas en lenguaje natural</li>
            <li>Proporcionar listas detalladas de requisitos</li>
            <li>Indicar costos aproximados y tiempos de respuesta</li>
            <li>
              Dirigir al usuario a la oficina correcta cuando sea necesario
            </li>
            <li>
              Actualizar la información conforme cambian los procedimientos
            </li>
          </ul>
          <p>
            El asistente está en constante aprendizaje y mejora para brindarte
            la mejor experiencia posible.
          </p>
        </div>
      ),
    },
    {
      question: "¿Puedo realizar mis trámites a través de esta plataforma?",
      answer: (
        <div className="space-y-3">
          <p>
            No, actualmente nuestra plataforma es únicamente informativa y de
            orientación. No realizamos trámites directamente.
          </p>
          <p>
            Nuestro objetivo es prepararte con toda la información necesaria
            antes de acudir a la dependencia correspondiente, para que puedas
            completar tu trámite de manera exitosa en tu primera visita.
          </p>
          <p>
            En el futuro, planeamos integrar servicios adicionales que faciliten
            aún más tu interacción con las dependencias gubernamentales.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero section for ASK page */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Centro de Ayuda
            </h1>
            <p className="text-blue-100 max-w-xl">
              Encuentra respuestas a tus preguntas sobre trámites
              gubernamentales y cómo usar nuestra plataforma
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <HelpCircle size={64} className="text-blue-200" />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Todo lo que necesitas saber sobre nuestra plataforma de asistencia
            en trámites gubernamentales
          </p>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left bg-white"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-blue-600">
                    {openIndex === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-5 bg-gray-50 border-t border-gray-100">
                    <div className="prose max-w-none text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitas ayuda adicional?
            </h2>
            <p className="mb-6">
              Si tienes alguna pregunta que no ha sido respondida o necesitas
              asistencia específica, no dudes en contactarnos. Nuestro equipo
              estará encantado de ayudarte.
            </p>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <a
                href="mailto:correodeejemplo@gmail.com"
                className="hover:underline"
              >
                correodeejemplo@gmail.com
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Probar nuestro asistente virtual
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
