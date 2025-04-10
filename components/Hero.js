import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
          alt="Personas en oficina realizando trámites"
          fill
          className="object-cover brightness-40 filter"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-50 container mx-auto mb-10  p-2 h-full rounded-lg flex flex-col justify-center items-center text-center px-10">
        <div className="inline-block mb-10">
          <span className="text-blue-600 font-bold bg-black/20 rounded-lg tracking-wider text-lg px-4 py-2 border-b-2 border-blue-400 [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
            ASISTENTE DE TRÁMITES GUBERNAMENTALES
          </span>
        </div>

        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Simplificamos Trámites <br />
          Para Ti
        </h1>

        <p className="text-white text-lg max-w-2xl mx-auto mb-8 bg-black/30 p-2 rounded-md">
          Deja que nuestro asistente con Inteligencia Artificial te ayude a
          saber qué hacer para tus trámites.
        </p>

        {/* Botón mejorado - más grande y llamativo */}
        <Link
          href="/servicios"
          className="bg-blue-600 hover:bg-blue-500 text-white text-xl md:text-2xl font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 inline-flex items-center justify-center w-full md:w-auto max-w-md mx-auto shadow-lg border-2 border-white"
        >
          EMPIEZA AQUÍ
          <ArrowRight className="ml-3 h-6 w-6" />
        </Link>

        {/* Pagination Dots */}
        <div className="absolute bottom-32 md:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
        </div>
      </div>
    </section>
  );
}
