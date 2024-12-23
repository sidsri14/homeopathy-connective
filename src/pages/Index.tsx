import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DoctorCard } from "@/components/DoctorCard";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";

const Index = () => {
  const doctors = [
    {
      name: "Dr. Divya Srivastava",
      image: "/placeholder.svg",
      qualifications: "BHMS - Naminath Homeopathy Medical College, Agra",
      specializations: ["Chronic Diseases", "Women's Health", "Pediatric Care"],
    },
    {
      name: "Dr. Mayank Senger",
      image: "/placeholder.svg",
      qualifications: "BHMS - Naminath Homeopathy Medical College, Agra",
      specializations: ["General Medicine", "Mental Health", "Skin Disorders"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section id="doctors" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-inter font-bold text-center mb-12">
            Our Expert Doctors
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <BookingForm />
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Index;