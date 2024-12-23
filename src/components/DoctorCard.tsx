import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DoctorCardProps {
  name: string;
  image: string;
  qualifications: string;
  specializations: string[];
}

export const DoctorCard = ({ name, image, qualifications, specializations }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-inter mb-2">{name}</CardTitle>
        <CardDescription className="mb-4">{qualifications}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {specializations.map((spec, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {spec}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};