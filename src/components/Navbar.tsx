import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-inter font-bold text-primary">1st Choice Homeopathy</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#doctors" className="text-gray-600 hover:text-primary transition-colors">Our Doctors</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
            <Button variant="default">Book Appointment</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
                  <a href="#doctors" className="text-gray-600 hover:text-primary transition-colors">Our Doctors</a>
                  <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
                  <Button variant="default" className="w-full">Book Appointment</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};