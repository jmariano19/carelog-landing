'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function DoctorSummary() {
    const { lang } = useLanguage();

    const content = {
        en: {
            title: "Doctor-ready summary",
            subtitle: "From simple WhatsApp messages to a clear document your doctor can review.",
            reason: "Reason for Consultation",
            headache: "Constant frontal headache",
            history: "History of Present Illness",
            onset: "Onset:",
            onsetValue: "Started 2 days ago.",
            location: "Location:",
            locationValue: "Frontal region",
            character: "Character:",
            characterValue: "Pressure-like sensation",
            course: "Course:",
            courseValue: "Persistent since onset",
            relieve: "Factors that relieve: None identified",
            worsen: "Factors that worsen: Light exposure (photophobia noted)",
            symptoms: "Associated Symptoms",
            symptom1: "Difficulty concentrating",
            symptom2: "Denies other accompanying symptoms",
            findings: "Findings / Reported Information",
            finding1: "The patient reports headache of onset approximately 48 hours ago, located in the frontal region, described as pressure-like and persistent.",
            finding2: "Reports worsening with light exposure.",
            patient: "Patient: Jeffrey"
        },
        es: {
            title: "Resumen para el médico",
            subtitle: "De mensajes de WhatsApp a un documento claro que tu médico puede revisar.",
            reason: "Motivo de Consulta",
            headache: "Dolor de cabeza frontal constante",
            history: "Historia de la Enfermedad Actual",
            onset: "Inicio:",
            onsetValue: "Comenzó hace 2 días.",
            location: "Ubicación:",
            locationValue: "Región frontal",
            character: "Carácter:",
            characterValue: "Sensación de presión",
            course: "Curso:",
            courseValue: "Persistente desde el inicio",
            relieve: "Factores que alivian: Ninguno identificado",
            worsen: "Factores que empeoran: Exposición a la luz (fotofobia)",
            symptoms: "Síntomas Asociados",
            symptom1: "Dificultad para concentrarse",
            symptom2: "Niega otros síntomas acompañantes",
            findings: "Hallazgos / Información Reportada",
            finding1: "El paciente reporta dolor de cabeza de inicio hace aproximadamente 48 horas, ubicado en la región frontal, descrito como presión y persistente.",
            finding2: "Reporta empeoramiento con exposición a la luz.",
            patient: "Paciente: Jeffrey"
        }
    };

    const c = content[lang];

    return (
        <section className="w-full bg-[#fbf3e9]">
            <div className="px-5 sm:px-6 py-12 flex flex-col items-center max-w-[420px] w-full mx-auto">
            {/* Title and Subtitle */}
            <div className="w-full max-w-[320px] flex flex-col justify-center text-center mb-8">
                <h2 className="font-serif text-[clamp(22px,6vw,25px)] font-bold leading-[1.7] tracking-[-0.4px] text-[#2d2926]">
                    {c.title}
                </h2>
                <p className="font-sans text-[clamp(14px,4vw,16px)] font-normal leading-[1.55] tracking-[-0.4px] text-[#2d2926]">
                    {c.subtitle}
                </p>
            </div>

            {/* Summary Card */}
            <div className="w-full max-w-[360px] bg-white rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-5 sm:p-6 border-l-[4px] border-l-[#2e915e] card-hover">
                {/* Reason for Consultation */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[16px]">🩺</span>
                    <span className="font-sans text-[11px] font-semibold tracking-[0.5px] text-[#6b7280] uppercase">
                        {c.reason}
                    </span>
                </div>
                <h3 className="font-serif text-[24px] font-bold text-[#2d2926] mb-5">
                    {c.headache}
                </h3>

                {/* History of Present Illness */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[14px]">📋</span>
                    <span className="font-sans text-[10px] font-semibold tracking-[0.5px] text-[#6b7280] uppercase">
                        {c.history}
                    </span>
                </div>

                <div className="space-y-1 mb-2 text-[14px]">
                    <div className="flex">
                        <span className="text-[#6b7280] w-[90px] sm:w-[100px] flex-shrink-0">{c.onset}</span>
                        <span className="text-[#2d2926] font-medium">{c.onsetValue}</span>
                    </div>
                    <div className="flex">
                        <span className="text-[#6b7280] w-[90px] sm:w-[100px] flex-shrink-0">{c.location}</span>
                        <span className="text-[#2d2926] font-medium">{c.locationValue}</span>
                    </div>
                    <div className="flex">
                        <span className="text-[#6b7280] w-[90px] sm:w-[100px] flex-shrink-0">{c.character}</span>
                        <span className="text-[#2d2926] font-medium">{c.characterValue}</span>
                    </div>
                    <div className="flex">
                        <span className="text-[#6b7280] w-[90px] sm:w-[100px] flex-shrink-0">{c.course}</span>
                        <span className="text-[#2d2926] font-medium">{c.courseValue}</span>
                    </div>
                </div>
                <p className="text-[13px] text-[#6b7280] mb-1">{c.relieve}</p>
                <p className="text-[13px] text-[#6b7280] mb-4">{c.worsen}</p>

                {/* Associated Symptoms */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[14px]">😐</span>
                    <span className="font-sans text-[10px] font-semibold tracking-[0.5px] text-[#6b7280] uppercase">
                        {c.symptoms}
                    </span>
                </div>
                <ul className="list-disc list-inside text-[14px] text-[#2d2926] mb-4 ml-1">
                    <li>{c.symptom1}</li>
                    <li>{c.symptom2}</li>
                </ul>

                {/* Findings / Reported Information */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[14px]">📝</span>
                    <span className="font-sans text-[10px] font-semibold tracking-[0.5px] text-[#6b7280] uppercase">
                        {c.findings}
                    </span>
                </div>
                <p className="text-[14px] text-[#2d2926] mb-2">
                    {c.finding1}
                </p>
                <p className="text-[14px] text-[#2d2926] mb-4">
                    {c.finding2}
                </p>

                {/* Patient Name */}
                <p className="text-[14px] font-semibold text-[#2d2926]">
                    {c.patient}
                </p>
            </div>
            </div>
        </section>
    );
}
