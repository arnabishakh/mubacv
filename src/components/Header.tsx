
import { Github, Mail, MapPin, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 border-b border-gray-200">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading">MUBASHIR MOHSIN</h1>
            <div className="mt-2 flex flex-col md:flex-row gap-2 md:gap-6 text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">13/3, Pallabi, Mirpur, Dhaka-1216, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <a href="tel:+8801726331487" className="text-sm hover:text-blue-600 transition-colors">
                  (+880) 1726331487
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-1">
            <a href="mailto:mubashir.mohsin.42884@gmail.com" className="flex items-center gap-1 text-sm hover:text-blue-600 transition-colors">
              <Mail className="h-4 w-4" />
              mubashir.mohsin.42884@gmail.com
            </a>
            <a href="https://github.com/Mubashir42884" className="flex items-center gap-1 text-sm hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Mubashir42884
            </a>
            <a href="https://orcid.org/0009-0008-7205-0855" className="flex items-center gap-1 text-sm hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
              <User className="h-4 w-4" />
              ORCID: 0009-0008-7205-0855
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
