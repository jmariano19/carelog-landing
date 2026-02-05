export type LangKey = "en" | "es";

export const dictionary = {
  en: {
    header: {
      brand: "CareLog",
      cta: "Start a CareLog"
    },
    hero: {
      title: "Stop relying on memory for your health.",
      sub: "Everything your doctor needs — remembered, organized, ready.",
      support: "No app to download. Works in WhatsApp."
    },
    greenStory: {
      steps: [
        {
          title: "Capture symptoms, changes, and questions in seconds in WhatsApp.",
          micro: "Just send messages — text, notes, or voice."
        },
        {
          title: "Builds a timeline automatically.",
          micro: "You message. We organize everything over time."
        },
        {
          title: "Generates a clean summary you can share at your next visit.",
          micro: "Clear, structured, and easy for a doctor to review."
        }
      ],
      cta: "Start on WhatsApp",
      note: "It takes less than a minute."
    },
    benefits: {
      cards: [
        {
          title: "For you and your family",
          body: "Less “What did I forget?” More clarity for your next visit."
        },
        {
          title: "For your doctor",
          body: "Better history. Less back-and-forth. More time for real guidance."
        }
      ]
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "Tell CareLog what’s happening",
          sub: "A quick note, a few texts, or a voice message — whenever it happens."
        },
        {
          title: "CareLog organizes it over time",
          sub: "Symptoms, triggers, meds, questions — all in one place."
        },
        {
          title: "Get a doctor-ready summary",
          sub: "Share it when you’re ready for your next visit."
        }
      ]
    },
    doctorSummary: {
      title: "Doctor-ready summary",
      subtitle: "From WhatsApp messages to a clean document your doctor can review.",
      exampleHeading: "For your doctor summary",
      fields: ["Name", "Started", "Pattern", "What helps", "Meds tried", "Impact", "Questions"]
    },
    ready: {
      title: "Ready to start?",
      body: "Send a quick message on WhatsApp. In under a minute, you’ll have a clearer starting point for your next visit.",
      cta: "Start on WhatsApp"
    },
    trust: {
      title: "Trust & safety",
      body: [
        "CareLog is an AI health companion — not a clinic.",
        "It does not diagnose or replace medical advice.",
        "It helps you prepare by organizing what you share.",
        "Not for emergencies. If symptoms are severe or sudden, seek immediate care.",
        "You control what you share and when."
      ]
    }
  },
  es: {
    header: {
      brand: "CareLog",
      cta: "Iniciar un CareLog"
    },
    hero: {
      title: "Deja de depender de tu memoria para tu salud.",
      sub: "Todo lo que tu médico necesita — recordado, organizado, listo.",
      support: "Sin app. Funciona por WhatsApp."
    },
    greenStory: {
      steps: [
        {
          title: "Registra síntomas, cambios y preguntas en segundos por WhatsApp.",
          micro: "Solo manda mensajes — texto, notas o audios."
        },
        {
          title: "Crea una línea de tiempo automáticamente.",
          micro: "Tú escribes. Nosotros lo organizamos a lo largo del tiempo."
        },
        {
          title: "Genera un resumen claro para compartir en tu próxima consulta.",
          micro: "Claro, estructurado y fácil de revisar por tu médico."
        }
      ],
      cta: "Empezar en WhatsApp",
      note: "Toma menos de un minuto."
    },
    benefits: {
      cards: [
        {
          title: "Para ti y tu familia",
          body: "Menos “¿qué se me olvidó?” Más claridad para tu próxima consulta."
        },
        {
          title: "Para tu médico",
          body: "Mejor historia clínica. Menos ida y vuelta. Más tiempo para orientar."
        }
      ]
    },
    howItWorks: {
      title: "Cómo funciona",
      steps: [
        {
          title: "Cuéntale a CareLog qué está pasando",
          sub: "Una nota, unos mensajes o un audio — cuando ocurra."
        },
        {
          title: "CareLog lo organiza con el tiempo",
          sub: "Síntomas, detonantes, meds, preguntas — todo en un solo lugar."
        },
        {
          title: "Obtén un resumen listo para tu consulta",
          sub: "Compártelo cuando estés listo para tu próxima visita."
        }
      ]
    },
    doctorSummary: {
      title: "Resumen listo para el doctor",
      subtitle: "De mensajes en WhatsApp a un documento claro para revisar.",
      exampleHeading: "Para tu resumen médico",
      fields: ["Nombre", "Inicio", "Patrón", "Qué ayuda", "Medicación probada", "Impacto", "Preguntas"]
    },
    ready: {
      title: "¿Listo para empezar?",
      body: "Manda un mensaje por WhatsApp. En menos de un minuto tendrás un punto de partida más claro para tu próxima consulta.",
      cta: "Empezar en WhatsApp"
    },
    trust: {
      title: "Confianza y seguridad",
      body: [
        "CareLog es un acompañante de salud con IA — no es una clínica.",
        "No diagnostica ni reemplaza el consejo médico.",
        "Te ayuda a prepararte organizando lo que compartes.",
        "No es para emergencias. Si los síntomas son graves o repentinos, busca atención inmediata.",
        "Tú decides qué compartir y cuándo."
      ]
    }
  }
} as const;
