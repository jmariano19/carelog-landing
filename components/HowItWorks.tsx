'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function HowItWorks() {
  const { lang } = useLanguage();

  const stepsEn = [
    {
      num: 1,
      titleParts: [
        { text: "Tell ", highlight: false },
        { text: "CareLog", highlight: true, green: true },
        { text: " what's happening", highlight: false }
      ],
      subParts: [
        { text: "A ", highlight: false },
        { text: "quick note", highlight: true },
        { text: ", a ", highlight: false },
        { text: "few lines", highlight: true },
        { text: ", or a ", highlight: false },
        { text: "voice", highlight: true },
        { text: " message — whenever it happens", highlight: false }
      ]
    },
    {
      num: 2,
      titleParts: [
        { text: "CareLog", highlight: true, green: true },
        { text: " organizes it over time", highlight: false }
      ],
      subParts: [
        { text: "Symptoms", highlight: true },
        { text: ", ", highlight: false },
        { text: "triggers", highlight: true },
        { text: ", ", highlight: false },
        { text: "meds", highlight: true },
        { text: ", ", highlight: false },
        { text: "questions", highlight: true },
        { text: ", and what helped — kept in one place.", highlight: false }
      ]
    },
    {
      num: 3,
      titleParts: [
        { text: "Get a doctor-ready summary", highlight: false }
      ],
      subParts: [
        { text: "A ", highlight: false },
        { text: "clean note you can bring", highlight: true },
        { text: " to your next visit or share when you choose.", highlight: false }
      ]
    }
  ];

  const stepsEs = [
    {
      num: 1,
      titleParts: [
        { text: "Cuéntale a ", highlight: false },
        { text: "CareLog", highlight: true, green: true },
        { text: " qué está pasando", highlight: false }
      ],
      subParts: [
        { text: "Una ", highlight: false },
        { text: "nota rápida", highlight: true },
        { text: ", unos ", highlight: false },
        { text: "mensajes", highlight: true },
        { text: ", o un ", highlight: false },
        { text: "audio", highlight: true },
        { text: " — cuando ocurra", highlight: false }
      ]
    },
    {
      num: 2,
      titleParts: [
        { text: "CareLog", highlight: true, green: true },
        { text: " lo organiza con el tiempo", highlight: false }
      ],
      subParts: [
        { text: "Síntomas", highlight: true },
        { text: ", ", highlight: false },
        { text: "detonantes", highlight: true },
        { text: ", ", highlight: false },
        { text: "medicamentos", highlight: true },
        { text: ", ", highlight: false },
        { text: "preguntas", highlight: true },
        { text: ", y lo que ayudó — todo en un lugar.", highlight: false }
      ]
    },
    {
      num: 3,
      titleParts: [
        { text: "Obtén un resumen para tu consulta", highlight: false }
      ],
      subParts: [
        { text: "Una ", highlight: false },
        { text: "nota clara que puedes llevar", highlight: true },
        { text: " a tu próxima cita o compartir cuando quieras.", highlight: false }
      ]
    }
  ];

  const steps = lang === 'en' ? stepsEn : stepsEs;

  return (
    <section className="px-5 sm:px-[24px] pt-8 pb-12 bg-[#fbf6ee] max-w-[420px] w-full mx-auto">
      <div className="relative flex flex-col gap-6">
        {/* Connecting Line - behind the boxes */}
        <div className="absolute left-[23px] top-[48px] bottom-[48px] w-[2px] bg-[#2e915e] z-0" />

        {steps.map((step, index) => (
          <div
            key={step.num}
            className="relative flex gap-5 z-10 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Number Box - solid background with border to cover the line */}
            <div className="flex-shrink-0 w-[48px] h-[48px] rounded-[8px] bg-[#d4e8dc] border-[2px] border-[#2e915e] flex items-center justify-center relative z-20 transition-transform duration-200 hover:scale-110">
              <span className="font-serif text-[26px] font-bold text-[#2e915e]">
                {step.num}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h3 className="font-serif text-[clamp(19px,5.5vw,22px)] font-bold leading-[1.3] tracking-[-0.4px] text-[#2d2926] mb-1">
                {step.titleParts.map((part, i) => (
                  part.green ? (
                    <span key={i} className="text-[#2e915e]">{part.text}</span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                ))}
              </h3>
              <p className="font-sans text-[clamp(15px,4.2vw,17px)] font-normal leading-[1.4] tracking-[-0.3px] text-[#2d2926]">
                {step.subParts.map((part, i) => (
                  part.highlight ? (
                    <span key={i} className="bg-[rgba(46,145,94,0.13)] px-[3px] py-[1px] rounded-[2px]">{part.text}</span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
