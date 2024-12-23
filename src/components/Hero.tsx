import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-inter font-bold text-gray-800 mb-6">
            Natural Healing Through Professional Homeopathy Care
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience personalized homeopathic treatment from certified professionals
            through convenient online consultations.
          </p>
          <Button size="lg" className="text-lg px-8" onClick={scrollToBooking}>
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};