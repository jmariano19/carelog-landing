import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GreenStory from "@/components/GreenStory";
import BenefitsCards from "@/components/BenefitsCards";
import HowItWorks from "@/components/HowItWorks";
import DoctorSummary from "@/components/DoctorSummary";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf6ee]">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Green Story - Scroll Animation Section */}
      <GreenStory />

      {/* Benefits Cards */}
      <BenefitsCards />

      {/* How It Works */}
      <HowItWorks />

      {/* Doctor Summary */}
      <DoctorSummary />

      {/* Trust & Footer */}
      <Trust />
    </div>
  );
}
