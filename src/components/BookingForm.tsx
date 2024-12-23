import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const availableTimeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

export const BookingForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    symptoms: "",
    doctor: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTime) {
      toast.error("Please select both date and time for your appointment");
      return;
    }
    
    // For now, just show a success message
    toast.success("Appointment request submitted! We'll contact you for confirmation.");
    console.log({ ...formData, date, selectedTime });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Consultation</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            name="age"
            type="number"
            required
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="doctor">Select Doctor</Label>
          <select
            id="doctor"
            name="doctor"
            required
            value={formData.doctor}
            onChange={handleInputChange}
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          >
            <option value="">Select a doctor</option>
            <option value="Dr. Divya Srivastava">Dr. Divya Srivastava</option>
            <option value="Dr. Mayank Senger">Dr. Mayank Senger</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="symptoms">Symptoms & Health Concerns</Label>
        <Textarea
          id="symptoms"
          name="symptoms"
          required
          value={formData.symptoms}
          onChange={handleInputChange}
          placeholder="Please describe your symptoms and health concerns"
          className="min-h-[100px]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Select Date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => {
              const day = date.getDay();
              return date < new Date() || day === 0; // Disable past dates and Sundays
            }}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-2">
          <Label>Select Time Slot</Label>
          <div className="grid grid-cols-2 gap-2">
            {availableTimeSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
                className="w-full"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Schedule Appointment
      </Button>
    </form>
  );
};