'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Trust() {
    const { lang, t } = useLanguage();

    const content = {
        en: {
            ready: "Ready to start?",
            readyBody: "Send a quick message on WhatsApp. In under a minute, you'll have a clean starting point for your next visit.",
            cta: "START ON WhatsApp",
            trustTitle: "Trust & safety",
            trust1a: "CareLog",
            trust1b: " is an AI health companion — ",
            trust1c: "not a clinician.",
            trust2a: "It does not diagnose",
            trust2b: " or ",
            trust2c: "replace medical advice.",
            trust2d: " It helps you prepare by organizing what you share.",
            trust3a: "Not for emergencies.",
            trust3b: " If symptoms are severe or urgent, seek immediate care.",
            trust4: "You control what you share and when."
        },
        es: {
            ready: "¿Listo para empezar?",
            readyBody: "Manda un mensaje por WhatsApp. En menos de un minuto tendrás un punto de partida más claro para tu próxima consulta.",
            cta: "EMPEZAR EN WhatsApp",
            trustTitle: "Confianza y seguridad",
            trust1a: "CareLog",
            trust1b: " es un acompañante de salud con IA — ",
            trust1c: "no es un médico.",
            trust2a: "No diagnostica",
            trust2b: " ni ",
            trust2c: "reemplaza el consejo médico.",
            trust2d: " Te ayuda a prepararte organizando lo que compartes.",
            trust3a: "No es para emergencias.",
            trust3b: " Si los síntomas son graves o repentinos, busca atención inmediata.",
            trust4: "Tú decides qué compartir y cuándo."
        }
    };

    const c = content[lang];

    return (
        <section className="pt-8 pb-16 px-5 sm:px-6 text-center max-w-[420px] w-full mx-auto">
            {/* WhatsApp Icon */}
            <div className="flex justify-center mb-[15px]">
                <img src="/WhatsApp.png" alt="WhatsApp" className="w-[44px] h-[43px] object-contain" />
            </div>

            {/* Ready to start? */}
            <h2 className="font-serif text-[25px] font-bold leading-[43.2px] tracking-[-0.4px] text-[#2d2926] mb-[15px]">
                {c.ready}
            </h2>

            <p className="font-sans text-[clamp(14px,4vw,16px)] font-normal leading-[1.3] tracking-[-0.4px] text-black mb-8 w-full max-w-[280px] mx-auto">
                {c.readyBody}
            </p>

            {/* CTA Button with hover animation */}
            <div className="flex justify-center mb-16">
                <a
                    href={`https://wa.me/18627775277?text=${lang === 'en' ? 'Hello' : 'Hola'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-[34px] w-[199px] rounded-full border border-[rgba(183,106,74,0.45)] bg-gradient-to-b from-[#c27353] to-[#a85e42] text-white text-[12px] font-semibold tracking-[0.2px] uppercase shadow-[0_14px_28px_rgba(183,106,74,0.2)] transition-all duration-200 hover:scale-110 active:scale-105 flex items-center justify-center gap-2 no-underline"
                >
                    <span className="w-2 h-2 rounded-full bg-[rgba(255,247,238,0.7)] shadow-[0_0_0_2px_rgba(255,247,238,0.35)]" />
                    {c.cta}
                </a>
            </div>

            {/* Trust & Safety Section */}
            <div className="pt-8 flex flex-col items-center">
                <h3 className="font-serif text-[25px] font-bold leading-[28px] text-black mb-6 text-center">
                    {c.trustTitle}
                </h3>
                <div className="w-full max-w-[320px] text-center font-sans text-[clamp(14px,4vw,16px)] leading-[1.55] text-black">
                    <p className="mb-4">
                        <span className="font-bold">{c.trust1a}</span>{c.trust1b}<span className="font-bold">{c.trust1c}</span>
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">{c.trust2a}</span>{c.trust2b}<span className="font-bold">{c.trust2c}</span>{c.trust2d}
                    </p>
                    <p className="mb-4">
                        <span className="font-bold">{c.trust3a}</span>{c.trust3b}
                    </p>
                    <p>
                        {c.trust4}
                    </p>
                </div>

                {/* Logo */}
                <div className="mt-8 flex justify-center items-center gap-2">
                    <img
                        src="/carelog-logo.svg"
                        alt="CareLog"
                        className="h-[26px] w-auto"
                    />
                </div>
            </div>
        </section>
    );
}
