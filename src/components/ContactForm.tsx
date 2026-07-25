import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

interface FormInputs {
  name: string;
  email: string;
  eventType: string;
  estimatedDate: string;
  guestCount?: string;
  eventIdea?: string;
  additionalDetails?: string;
}

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      eventType: '',
      estimatedDate: '',
      guestCount: '',
      eventIdea: '',
      additionalDetails: '',
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    
    try {
      await fetch('https://formsubmit.co/ajax/studiohule@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Nueva Consulta Web Hule - ${data.name}`,
          Nombre: data.name,
          Email: data.email,
          'Tipo de Evento': data.eventType,
          'Fecha Estimada': data.estimatedDate,
          'Cantidad de Invitados': data.guestCount || 'No especificado',
          'Idea del Evento': data.eventIdea || 'No especificado',
          'Detalles Adicionales': data.additionalDetails || 'No especificado',
        }),
      });
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FFFDF8] border border-[#4B2032]/5 rounded-[2rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(75,32,50,0.05)] text-center flex flex-col items-center justify-center min-h-[400px]">
        {/* Animated Check Balloon Icon */}
        <div className="w-16 h-16 rounded-full bg-[#CB4178]/10 flex items-center justify-center text-[#CB4178] mb-6 animate-bounce">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h3 className="font-serif text-3xl text-[#4B2032] mb-3 font-semibold">
          ¡Gracias!
        </h3>
        
        <p className="font-sans text-base text-[#945B72] max-w-sm leading-relaxed">
          Recibimos tu idea y pronto nos pondremos en contacto para empezar a diseñar.
        </p>

        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 px-6 py-2.5 border border-[#4B2032]/10 hover:border-[#4B2032] text-[#4B2032] rounded-full text-xs font-semibold font-mono uppercase tracking-wider transition-all duration-300"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFDF8] border border-[#4B2032]/5 rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(75,32,50,0.04)] text-left">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-mono text-[9px] uppercase font-bold text-[#945B72] tracking-wider pl-1">
              Nombre *
            </label>
            <input
              id="name"
              type="text"
              placeholder="¿Cómo te llamás?"
              {...register('name', { required: 'Por favor, ingresá tu nombre' })}
              className={`w-full h-12 px-4 rounded-xl bg-[#F8F2E8]/40 border ${
                errors.name ? 'border-red-400 focus:ring-red-200' : 'border-[#4B2032]/10 focus:border-[#CB4178] focus:ring-[#CB4178]/20'
              } text-[#4B2032] font-sans text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
            />
            {errors.name && (
              <span className="text-xs text-red-500 font-sans pl-1 mt-0.5">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-[9px] uppercase font-bold text-[#945B72] tracking-wider pl-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="para responderte"
              {...register('email', {
                required: 'Por favor, ingresá tu email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Por favor, ingresá un email válido',
                },
              })}
              className={`w-full h-12 px-4 rounded-xl bg-[#F8F2E8]/40 border ${
                errors.email ? 'border-red-400 focus:ring-red-200' : 'border-[#4B2032]/10 focus:border-[#CB4178] focus:ring-[#CB4178]/20'
              } text-[#4B2032] font-sans text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
            />
            {errors.email && (
              <span className="text-xs text-red-500 font-sans pl-1 mt-0.5">{errors.email.message}</span>
            )}
          </div>
        </div>

        {/* Row 2: Event Type & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="eventType" className="font-mono text-[9px] uppercase font-bold text-[#945B72] tracking-wider pl-1">
              Tipo de evento *
            </label>
            <select
              id="eventType"
              {...register('eventType', { required: 'Por favor, seleccioná una opción' })}
              className={`w-full h-12 px-4 rounded-xl bg-[#F8F2E8]/40 border ${
                errors.eventType ? 'border-red-400 focus:ring-red-200' : 'border-[#4B2032]/10 focus:border-[#CB4178] focus:ring-[#CB4178]/20'
              } text-[#4B2032] font-sans text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
            >
              <option value="">Seleccionar tipo</option>
              <option value="Cumpleaños">Cumpleaños</option>
              <option value="Baby shower">Baby shower</option>
              <option value="Aniversario">Aniversario</option>
              <option value="Evento corporativo">Evento corporativo</option>
              <option value="Candy bar">Candy bar</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.eventType && (
              <span className="text-xs text-red-500 font-sans pl-1 mt-0.5">{errors.eventType.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="estimatedDate" className="font-mono text-[9px] uppercase font-bold text-[#945B72] tracking-wider pl-1">
              Fecha estimada *
            </label>
            <input
              id="estimatedDate"
              type="date"
              {...register('estimatedDate', { required: 'Por favor, elegí una fecha estimada' })}
              className={`w-full h-12 px-4 rounded-xl bg-[#F8F2E8]/40 border ${
                errors.estimatedDate ? 'border-red-400 focus:ring-red-200' : 'border-[#4B2032]/10 focus:border-[#CB4178] focus:ring-[#CB4178]/20'
              } text-[#4B2032] font-sans text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
            />
            {errors.estimatedDate && (
              <span className="text-xs text-red-500 font-sans pl-1 mt-0.5">{errors.estimatedDate.message}</span>
            )}
          </div>
        </div>

        {/* Row 3: Guest Count */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="guestCount" className="font-mono text-[9px] uppercase font-bold text-[#945B72] tracking-wider pl-1">
            Cantidad de invitados (Aproximada)
          </label>
          <input
            id="guestCount"
            type="text"
            placeholder="Ej: 50 personas"
            {...register('guestCount')}
            className="w-full h-12 px-4 rounded-xl bg-[#F8F2E8]/40 border border-[#4B2032]/10 focus:border-[#CB4178] focus:ring-[#CB4178]/20 text-[#4B2032] font-sans text-sm focus:outline-none focus:ring-4 transition-all duration-300"
          />
        </div>

        {/* Row 4: Event Idea */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="eventIdea" className="font-mono text-[9px] uppercase font-bold text-[#945B72] tracking-wider pl-1">
            Tu idea
          </label>
          <input
            id="eventIdea"
            type="text"
            placeholder="Colores, tema, lugar..."
            {...register('eventIdea')}
            className="w-full h-12 px-4 rounded-xl bg-[#F8F2E8]/40 border border-[#4B2032]/10 focus:border-[#CB4178] focus:ring-[#CB4178]/20 text-[#4B2032] font-sans text-sm focus:outline-none focus:ring-4 transition-all duration-300"
          />
        </div>

        {/* Row 5: Additional Details */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="additionalDetails" className="font-mono text-[9px] uppercase font-bold text-[#945B72] tracking-wider pl-1">
            Algo más que quieras contarnos
          </label>
          <textarea
            id="additionalDetails"
            rows={4}
            placeholder="Cuanto más nos cuentes, más podemos imaginar."
            {...register('additionalDetails')}
            className="w-full p-4 rounded-xl bg-[#F8F2E8]/40 border border-[#4B2032]/10 focus:border-[#CB4178] focus:ring-[#CB4178]/20 text-[#4B2032] font-sans text-sm focus:outline-none focus:ring-4 transition-all duration-300 resize-y"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 bg-[#CB4178] hover:bg-[#4B2032] disabled:bg-[#CB4178]/55 text-white rounded-full font-mono text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg focus:outline-none transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Enviando consulta...</span>
            </>
          ) : (
            <>
              <span>Enviar consulta</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </>
          )}
        </button>

        {/* Legal Text */}
        <p className="text-[10px] text-[#945B72]/70 font-sans text-center leading-normal max-w-xs mx-auto">
          Al enviar, aceptás que Hule Studio se ponga en contacto para responder tu consulta.
        </p>

      </form>
    </div>
  );
};
export default ContactForm;
