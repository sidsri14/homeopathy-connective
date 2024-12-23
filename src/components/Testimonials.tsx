import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "/placeholder.svg",
    text: "The online consultation was very convenient and Dr. Divya's treatment helped me recover from chronic migraines.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    image: "/placeholder.svg",
    text: "Dr. Mayank's expertise in homeopathy helped me manage my anxiety naturally. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    image: "/placeholder.svg",
    text: "Outstanding experience! The treatment plan was personalized and effective.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-inter font-bold text-center mb-12">
          Patient Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {Array(testimonial.rating).fill("★").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};