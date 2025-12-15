import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Gift, 
  ShieldCheck, 
  Clock, 
  Users, 
  BookOpen, 
  Heart,
  ArrowRight,
  Menu,
  Award,
  PlayCircle
} from 'lucide-react';
import { SalesAssistant } from './components/SalesAssistant';
import { AccordionItem } from './components/Accordion';
import { FAQItem, Module, Bonus, Testimonial } from './types';

// --- DATA ---

const modules: Module[] = [
  { title: "Módulo 1: Fundamentos Mágicos", lessons: ["Materiales esenciales y dónde conseguirlos", "Tipos de lanas y agujas", "Tu primer nudo deslizado", "Lectura de patrones básicos"] },
  { title: "Módulo 2: Puntos Básicos e Intermedios", lessons: ["Punto bajo, medio y alto", "Aumentos invisibles", "Disminuciones perfectas", "Anillo mágico infalible"] },
  { title: "Módulo 3: Creando Formas 3D", lessons: ["La esfera perfecta", "Cuerpos y proporciones", "Cabezas y extremidades", "Relleno uniforme (Técnica secreta)"] },
  { title: "Módulo 4: Detalles que Enamoran", lessons: ["Ojos de seguridad y bordados", "Cabello realista lana a lana", "Expresiones faciales tiernas", "Unión de piezas sin costuras visibles"] },
  { title: "Módulo 5: Proyecto Final 'Oso Dormilón'", lessons: ["Tejiendo el cuerpo base", "Ropa y accesorios removibles", "Montaje final", "Packaging para regalo o venta"] },
];

const bonuses: Bonus[] = [
  { title: "Calculadora de Precios", description: "Plantilla Excel para saber exactamente cuánto cobrar por tus creaciones.", value: "$27 USD", icon: <CheckCircle2 /> },
  { title: "Comunidad VIP", description: "Acceso exclusivo a nuestro grupo de Facebook para resolver dudas diarias.", value: "$47 USD", icon: <Users /> },
  { title: "Pack 20 Patrones Premium", description: "Patrones PDF descargables de alta demanda listos para imprimir.", value: "$37 USD", icon: <BookOpen /> },
];

const testimonials: Testimonial[] = [
  { name: "Sofía Martínez", role: "Emprendedora", rating: 5, content: "Nunca pensé que podría tejer algo tan bonito. Las explicaciones son clarísimas y ahora vendo mis amigurumis en ferias.", image: "https://picsum.photos/100/100?random=1" },
  { name: "Carla Ruiz", role: "Mamá de 2", rating: 5, content: "Buscaba un hobby para relajarme y encontré una pasión. El soporte en el grupo es increíble, ¡me siento muy acompañada!", image: "https://picsum.photos/100/100?random=2" },
  { name: "Ana Torres", role: "Estudiante", rating: 5, content: "La técnica del anillo mágico siempre se me resistía hasta que vi la clase del Módulo 2. ¡Recomendadísimo!", image: "https://picsum.photos/100/100?random=3" },
];

const faqs: FAQItem[] = [
  { question: "¿Necesito conocimientos previos?", answer: "¡Para nada! El curso está diseñado para llevarte de la mano desde cero absoluto. Aprenderás a sostener la aguja hasta crear muñecos complejos." },
  { question: "¿Cuánto tiempo tengo acceso al curso?", answer: "El acceso es de por vida. Puedes ver las clases las veces que quieras, a tu propio ritmo y en cualquier dispositivo." },
  { question: "¿Cómo recibo el material?", answer: "Inmediatamente después de tu compra, recibirás un correo electrónico con tus datos de acceso a nuestra plataforma privada de alumnos." },
  { question: "¿Qué pasa si no me gusta?", answer: "Tienes una garantía de hierro de 7 días. Si sientes que el curso no es para ti, te devolvemos el 100% de tu dinero sin preguntas." },
];

// --- COMPONENTS ---

const StickyCTA = () => (
  <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-40 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
    <a href="#pricing" className="block w-full bg-brand-500 text-white text-center py-3 rounded-full font-bold shadow-lg hover:bg-brand-600 transition-colors animate-pulse">
      ¡QUIERO EMPEZAR YA!
    </a>
  </div>
);

const SectionHeading: React.FC<{ children: React.ReactNode; subtitle?: string; light?: boolean }> = ({ children, subtitle, light }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-heading font-extrabold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>
      {children}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-2xl mx-auto ${light ? 'text-brand-100' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
    <div className={`h-1 w-24 mx-auto rounded-full mt-4 ${light ? 'bg-brand-300' : 'bg-brand-500'}`}></div>
  </div>
);

export default function App() {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <SalesAssistant />
      <StickyCTA />

      {/* HEADER BAR */}
      <div className="bg-gradient-to-r from-brand-600 to-secondary-600 text-white text-center py-2 text-sm font-semibold tracking-wide px-4">
        💥 ÚLTIMAS HORAS: 70% DE DESCUENTO SOLO POR HOY 💥
      </div>

      {/* HERO SECTION */}
      <header className="relative bg-brand-50 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-200 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 pt-12 pb-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-white px-4 py-1 rounded-full border border-brand-200 text-brand-600 font-bold text-sm mb-6 shadow-sm">
                🧶 Más de 2,500 alumnas felices
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-tight mb-6">
                Descubre el Arte de Tejer <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-secondary-500">Amigurumis Mágicos</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Aprende desde cero a crear muñecos adorables que roben corazones y generen ingresos, incluso si nunca has tocado una aguja de crochet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#pricing" className="bg-brand-500 hover:bg-brand-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg shadow-brand-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2">
                  ¡SÍ! QUIERO APRENDER <ArrowRight size={20} />
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-1"><ShieldCheck size={16} className="text-green-500"/> Garantía 7 días</div>
                <div className="flex items-center gap-1"><Clock size={16} className="text-brand-500"/> Acceso Vitalicio</div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               {/* Hero Image / VSL Placeholder */}
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://picsum.photos/800/600" 
                    alt="Amigurumis Mágicos" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center group cursor-pointer">
                    <div className="bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <div className="bg-brand-500 text-white rounded-full p-4">
                         <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
               </div>
               
               {/* Floating elements */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                 <div className="bg-green-100 p-2 rounded-full">
                   <Star className="text-green-600 fill-green-600" size={20} />
                 </div>
                 <div>
                   <p className="font-bold text-gray-800">4.9/5 Estrellas</p>
                   <p className="text-xs text-gray-500">Calificación Promedio</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEM / AGITATION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Si respondes SÍ a alguna de estas preguntas, este curso es para ti.">
            ¿Te sientes identificada?
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Frustración con tutoriales", text: "Intentas seguir videos de YouTube pero van muy rápido, no explican los trucos o están en otros idiomas." },
              { title: "Tus muñecos quedan deformes", text: "Empiezas con ilusión pero al rellenar el muñeco pierde la forma, se ven los agujeros o la cabeza se cae." },
              { title: "Quieres emprender", text: "Sueñas con vender tus creaciones y generar un ingreso extra desde casa, pero no sabes cómo poner precio a tu trabajo." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:bg-brand-50 transition-colors border border-transparent hover:border-brand-100 group">
                <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  ?
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION / BENEFITS */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/300/400?random=1" className="rounded-2xl shadow-lg mt-8" alt="Amigurumi process" />
                <img src="https://picsum.photos/300/400?random=2" className="rounded-2xl shadow-lg mb-8" alt="Amigurumi finished" />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
                Imagina poder tejer cualquier personaje que tengas en mente 🧠✨
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Con <strong className="text-brand-600">Amigurumis Mágicos</strong>, no solo copiarás patrones. Entenderás la lógica detrás de cada punto para que tengas la libertad de crear.
              </p>
              <ul className="space-y-4">
                {[
                  "Técnicas profesionales de acabado (adiós nudos visibles).",
                  "Cómo leer patrones en cualquier idioma (símbolos universales).",
                  "Trucos para tejer más rápido y sin dolor de manos.",
                  "Secretos para dar expresiones tiernas y únicas."
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading subtitle="Un programa paso a paso diseñado para garantizar tu éxito.">
            ¿Qué vas a aprender?
          </SectionHeading>
          
          <div className="space-y-2">
            {modules.map((module, idx) => (
              <AccordionItem
                key={idx}
                title={module.title}
                isOpen={openModuleIndex === idx}
                onClick={() => setOpenModuleIndex(openModuleIndex === idx ? null : idx)}
                icon={<PlayCircle size={20} />}
              >
                <ul className="space-y-2 pl-2">
                  {module.lessons.map((lesson, lIdx) => (
                    <li key={lIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-300 rounded-full"></div>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Regalos exclusivos si te inscribes HOY.">
            Bonos de Acción Rápida
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bonuses.map((bonus, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-brand-100 border border-brand-50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  GRATIS
                </div>
                <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {bonus.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">{bonus.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{bonus.description}</p>
                <div className="text-brand-500 font-bold text-lg line-through opacity-60">
                  Valor: {bonus.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading>Lo que dicen nuestras alumnas</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, r) => <Star key={r} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-200" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-brand-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING OFFER */}
      <section id="pricing" className="py-20 bg-brand-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-800 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4">
              ¡Comienza tu Aventura Hoy!
            </h2>
            <p className="text-brand-100 text-lg mb-8">
              Únete a la comunidad de tejedoras más mágica de internet.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-brand-100 text-sm">
              <div className="flex items-center gap-2"><BookOpen size={16}/> 50+ Lecciones</div>
              <div className="hidden md:block">•</div>
              <div className="flex items-center gap-2"><Gift size={16}/> 3 Bonos Exclusivos</div>
              <div className="hidden md:block">•</div>
              <div className="flex items-center gap-2"><Award size={16}/> Certificado Incluido</div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-md mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-gray-500 font-medium mb-2">Precio Regular: <span className="line-through text-red-400">$97 USD</span></p>
              <div className="flex justify-center items-baseline gap-2 mb-6">
                <span className="text-5xl font-heading font-extrabold text-brand-600">$27</span>
                <span className="text-xl font-bold text-gray-500">USD</span>
              </div>
              
              <button className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2 mb-4 animate-pulse">
                INSCRIBIRME AHORA <ArrowRight />
              </button>
              
              <div className="flex justify-center gap-2">
                 {/* Fake payment icons using simple divs or placeholder svgs could go here, omitting for brevity */}
                 <span className="text-xs text-gray-400">Pago 100% Seguro y Encriptado 🔒</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
               <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                 <ShieldCheck size={32} className="text-brand-300" />
                 <div className="text-left">
                   <p className="font-bold text-white">Garantía de 7 Días</p>
                   <p className="text-xs text-brand-100">Riesgo cero para ti</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading>Preguntas Frecuentes</SectionHeading>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                title={faq.question}
                isOpen={openFaqIndex === i}
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              >
                {faq.answer}
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p className="font-heading font-bold text-brand-500 text-xl mb-4">Amigurumis Mágicos</p>
          <p className="mb-4">Hecho con 💖 y mucha lana.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-brand-500">Términos</a>
            <a href="#" className="hover:text-brand-500">Privacidad</a>
            <a href="#" className="hover:text-brand-500">Contacto</a>
          </div>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-gray-400">Este sitio no es parte de Facebook o Facebook Inc.</p>
        </div>
      </footer>
    </div>
  );
}