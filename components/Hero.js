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
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <p className="text-blue-400 font-medium tracking-wider mb-2">
          ASISTENTE DE TRÁMITES GUBERNAMENTALES
        </p>

        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Simplificamos Trámites <br />
          Para Ti
        </h1>

        <p className="text-black max-w-2xl mx-auto mb-8">
          deja que nuestro asistente con Inteligencia Artifical te ayude a saber
          que hacer para tus tramites.
        </p>

        <Link
          href="/servicios"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
        >
          AYUDA AI
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>

        {/* Pagination Dots */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
        </div>
      </div>

      {/* Partners Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-blue-600 py-4 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center text-white">
                <div className="w-6 h-6 mr-2 bg-white/20 rounded"></div>
                <span className="font-medium">logotipo. {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
