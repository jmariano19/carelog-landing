'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function GreenStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const { lang } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) setStep(0);
    else if (latest < 0.66) setStep(1);
    else setStep(2);
  });

  const bubbleOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.25, 0.3], [0, 1, 1, 0]);
  const bubbleY = useTransform(scrollYProgress, [0.05, 0.1, 0.25, 0.3], [10, 0, 0, -10]);

  const timelineOpacity = useTransform(scrollYProgress, [0.36, 0.41, 0.58, 0.63], [0, 1, 1, 0]);
  const timelineY = useTransform(scrollYProgress, [0.36, 0.41, 0.58, 0.63], [10, 0, 0, -10]);

  const docOpacity = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 0.95], [0, 1, 1, 0]);
  const docY = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 0.95], [10, 0, 0, -10]);

  const content = {
    en: {
      steps: [
        {
          title: "Capture symptoms, changes, and questions in seconds in WhatsApp",
          micro: ""
        },
        {
          title: "Builds a timeline automatically",
          micro: "(just message on WhatsApp, we organize everything.)"
        },
        {
          title: "Generates a clean summary you can share at your next Doctor visit",
          micro: "(Secured, organized)"
        }
      ],
      bubble: '"Headache since Monday" — note saved',
      bubble2: 'Headache for 2 weeks. Worse in the mornings. Improves with rest.',
      cta: "START ON WhatsApp",
      ctaSub: "Say Hi, only take few seconds.",
      ctaSub2: "No app to download"
    },
    es: {
      steps: [
        {
          title: "Captura síntomas, cambios y preguntas en segundos por WhatsApp",
          micro: ""
        },
        {
          title: "Crea una línea de tiempo automáticamente",
          micro: "(solo manda un mensaje en WhatsApp, nosotros organizamos todo.)"
        },
        {
          title: "Genera un resumen claro para compartir en tu próxima cita médica",
          micro: "(Seguro, organizado)"
        }
      ],
      bubble: '"Dolor de cabeza desde el lunes" — nota guardada',
      bubble2: 'Dolor de cabeza por 2 semanas. Peor en las mañanas. Mejora con descanso.',
      cta: "EMPEZAR EN WhatsApp",
      ctaSub: "Di Hola, solo toma unos segundos.",
      ctaSub2: "Sin app que descargar"
    }
  };

  const c = content[lang];

  return (
    <section ref={containerRef} className="relative bg-[#2e915e] text-white h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center pt-[72px] pb-8 overflow-hidden">

        {/* Text Steps */}
        <div className="relative w-full px-6 text-center h-[119px] mb-[31px] z-50">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {c.steps.map((s, i) => (
              <div
                key={i}
                className={`absolute top-0 left-0 w-full flex flex-col items-center justify-center transition-all duration-500 transform ${i === step
                  ? "opacity-100 translate-y-0"
                  : i < step
                    ? "opacity-0 -translate-y-4"
                    : "opacity-0 translate-y-4"
                  }`}
              >
                <h2 className="w-[288px] mx-auto font-serif text-[24px] font-semibold leading-[30px] text-white text-center">
                  {s.title}
                </h2>
                {s.micro && (
                  <p className="mt-2 font-sans text-[17px] font-light text-white leading-[30px]">
                    {s.micro}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Phone Visual */}
        <div className="relative flex-shrink-0">
          <img
            src="/final-phone.png"
            alt="CareLog Chat"
            className="w-[198px] h-auto object-contain"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />

          {/* Overlay 1: Bubble - top left */}
          <motion.div
            style={{ opacity: bubbleOpacity, y: bubbleY }}
            className="absolute -left-16 -top-8 px-5 py-4 bg-white rounded-[10px] shadow-[0_4px_40px_rgba(0,0,0,0.25)] text-sm font-medium text-ink z-10 max-w-[180px]"
          >
            {c.bubble}
          </motion.div>

          {/* Overlay 1b: Second Bubble - bottom right */}
          <motion.div
            style={{ opacity: bubbleOpacity, y: bubbleY }}
            className="absolute -right-16 top-[180px] px-5 py-4 bg-white rounded-[10px] shadow-[0_4px_40px_rgba(0,0,0,0.25)] text-sm font-medium text-ink z-10 max-w-[180px]"
          >
            {c.bubble2}
          </motion.div>

          {/* Overlay 2: Timeline Stack */}
          <motion.div
            style={{ opacity: timelineOpacity, y: timelineY, x: "-50%" }}
            className="absolute left-1/2 top-4 w-[340px] z-20"
          >
            {/* Timeline Line - connects the two cards on the left */}
            <div className="absolute left-[22px] top-[40px] bottom-[220px] w-[3px] bg-[#2e915e] rounded-full z-0" />

            {/* Card 1 */}
            <div className="relative bg-white rounded-[20px] p-6 shadow-[0_4px_40px_rgba(0,0,0,0.25)] mb-3">
              {/* Date with green dot */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-[14px] h-[14px] rounded-full bg-[#2e915e] flex-shrink-0" />
                <div className="text-[16px] font-normal text-black/70">{lang === 'en' ? 'Today · 06:11 PM' : 'Hoy · 06:11 PM'}</div>
              </div>
              <div className="text-[28px] font-bold text-black mb-2 font-serif leading-tight">{lang === 'en' ? 'Sty in left eye' : 'Orzuelo en ojo izquierdo'}</div>
              <div className="text-[18px] leading-[26px] text-black font-normal font-sans">
                {lang === 'en'
                  ? 'Jeffrey has constant frontal headache, for two days.'
                  : 'Jeffrey tiene dolor de cabeza constante en la parte frontal, desde hace dos días.'}
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white rounded-[20px] p-6 shadow-[0_4px_40px_rgba(0,0,0,0.25)]">
              {/* Date with green dot */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-[14px] h-[14px] rounded-full bg-[#2e915e] flex-shrink-0" />
                <div className="text-[16px] font-normal text-black/70">{lang === 'en' ? 'Yesterday · 05:11 PM' : 'Ayer · 05:11 PM'}</div>
              </div>
              <div className="text-[28px] font-bold text-black mb-2 font-serif leading-tight">{lang === 'en' ? 'Back Pain' : 'Dolor de Espalda'}</div>
              <div className="text-[18px] leading-[26px] text-black font-normal font-sans mb-4">
                {lang === 'en' ? 'Jeffrey had bad pain' : 'Jeffrey tuvo dolor fuerte'}
              </div>

              {/* Voice Message Player - WhatsApp style bubble */}
              <div className="bg-[#f0f0f0] rounded-full p-1.5 pr-4 flex items-center gap-2 max-w-[240px]">
                {/* Mic Icon */}
                <div className="w-[36px] h-[36px] rounded-full bg-[#2e915e] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93h2c0 3.31 2.69 6 6 6s6-2.69 6-6h2c0 4.08-3.06 7.44-7 7.93V19h4v2H8v-2h4v-3.07z"/>
                  </svg>
                </div>
                {/* Play Button */}
                <div className="text-gray-500 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                {/* Waveform */}
                <div className="flex items-center gap-[1px] h-[20px] flex-1 min-w-0">
                  {[4,8,12,6,14,8,10,16,6,12,8,14,10,6,12,8,10,14,6,8].map((h, i) => (
                    <div
                      key={i}
                      className="w-[2px] bg-gray-400 rounded-full flex-shrink-0"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                {/* Speaker Icon */}
                <div className="text-gray-600 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overlay 3: Doc Summary Card */}
          <motion.div
            style={{ opacity: docOpacity, y: docY, x: "-50%" }}
            className="absolute left-1/2 top-0 w-[320px] z-30"
          >
            {/* Doctor Summary Card */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_40px_rgba(0,0,0,0.25)] p-5 text-left text-[11px]">
              {/* Reason for Consultation */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[14px]">🩺</span>
                <span className="text-[10px] font-semibold tracking-wide text-gray-500 uppercase">
                  {lang === 'en' ? 'Reason for Consultation' : 'Motivo de Consulta'}
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-black mb-4">
                {lang === 'en' ? 'Constant frontal headache' : 'Dolor de cabeza frontal constante'}
              </h3>

              {/* History of Present Illness */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[12px]">📋</span>
                <span className="text-[9px] font-semibold tracking-wide text-gray-500 uppercase">
                  {lang === 'en' ? 'History of Present Illness' : 'Historia de la Enfermedad Actual'}
                </span>
              </div>
              <div className="space-y-1 mb-4 text-[11px]">
                <div className="flex"><span className="text-gray-500 w-[90px]">{lang === 'en' ? 'Onset:' : 'Inicio:'}</span><span className="text-black">{lang === 'en' ? 'Started 2 days ago.' : 'Comenzó hace 2 días.'}</span></div>
                <div className="flex"><span className="text-gray-500 w-[90px]">{lang === 'en' ? 'Location:' : 'Ubicación:'}</span><span className="text-black">{lang === 'en' ? 'Frontal region' : 'Región frontal'}</span></div>
                <div className="flex"><span className="text-gray-500 w-[90px]">{lang === 'en' ? 'Character:' : 'Carácter:'}</span><span className="text-black">{lang === 'en' ? 'Pressure-like sensation' : 'Sensación de presión'}</span></div>
                <div className="flex"><span className="text-gray-500 w-[90px]">{lang === 'en' ? 'Course:' : 'Curso:'}</span><span className="text-black">{lang === 'en' ? 'Persistent since onset' : 'Persistente desde el inicio'}</span></div>
                <div className="text-[10px] text-gray-600">{lang === 'en' ? 'Factors that relieve: None identified' : 'Factores que alivian: Ninguno identificado'}</div>
                <div className="text-[10px] text-gray-600">{lang === 'en' ? 'Factors that worsen: Light exposure (photophobia noted)' : 'Factores que empeoran: Exposición a la luz (fotofobia)'}</div>
              </div>

              {/* Associated Symptoms */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[12px]">😐</span>
                <span className="text-[9px] font-semibold tracking-wide text-gray-500 uppercase">
                  {lang === 'en' ? 'Associated Symptoms' : 'Síntomas Asociados'}
                </span>
              </div>
              <ul className="list-disc list-inside text-[10px] text-black mb-4 space-y-0.5">
                <li>{lang === 'en' ? 'Difficulty concentrating' : 'Dificultad para concentrarse'}</li>
                <li>{lang === 'en' ? 'Denies other accompanying symptoms' : 'Niega otros síntomas acompañantes'}</li>
              </ul>

              {/* Findings */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[12px]">📝</span>
                <span className="text-[9px] font-semibold tracking-wide text-gray-500 uppercase">
                  {lang === 'en' ? 'Findings / Reported Information' : 'Hallazgos / Información Reportada'}
                </span>
              </div>
              <p className="text-[10px] text-gray-700 leading-relaxed mb-3">
                {lang === 'en'
                  ? 'The patient reports headache of onset approximately 48 hours ago, located in the frontal region, described as pressure-like and persistent.'
                  : 'El paciente reporta dolor de cabeza de inicio hace aproximadamente 48 horas, ubicado en la región frontal, descrito como presión y persistente.'}
              </p>
              <p className="text-[10px] text-gray-700 mb-3">
                {lang === 'en' ? 'Reports worsening with light exposure.' : 'Reporta empeoramiento con exposición a la luz.'}
              </p>

              {/* Patient */}
              <div className="text-[11px] font-semibold text-black">{lang === 'en' ? 'Patient: Jeffrey' : 'Paciente: Jeffrey'}</div>
            </div>
          </motion.div>

        </div>

        {/* Start CTA with hover animation */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href={`https://wa.me/18627775277?text=${lang === 'en' ? 'Hello' : 'Hola'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[44px] w-[220px] rounded-full border border-[rgba(255,255,255,0.3)] bg-gradient-to-b from-[#fff8f0] to-[#f5ebe0] text-[#2e915e] text-[13px] font-semibold tracking-[0.3px] uppercase shadow-[0_4px_20px_rgba(255,248,240,0.4),0_8px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:scale-110 hover:shadow-[0_6px_28px_rgba(255,248,240,0.5),0_12px_50px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] active:scale-105 flex items-center justify-center gap-2 no-underline"
          >
            <span className="w-2 h-2 rounded-full bg-[#2e915e] shadow-[0_0_0_2px_rgba(46,145,94,0.3),0_0_8px_rgba(46,145,94,0.2)]" />
            {c.cta}
          </a>
          <p className="text-[13px] font-normal text-[rgba(255,255,255,0.9)] text-center">
            {c.ctaSub}<br />{c.ctaSub2}
          </p>
        </div>

      </div>
    </section>
  );
}
