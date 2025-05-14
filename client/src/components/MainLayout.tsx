
import { useState, useEffect } from "react";
import { Sun, Moon, Linkedin, Mail, Github, User, ExternalLink } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  // Contact links
  const contactLinks = [
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/mubashir-mohsin/" 
    },
    { 
      name: "Email", 
      icon: Mail, 
      url: "mailto:mubashir.mohsin.42884@gmail.com" 
    },
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/Mubashir42884" 
    },
    { 
      name: "ORCID", 
      icon: User, 
      url: "https://orcid.org/0009-0008-7205-0855" 
    }
  ];

 

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200`}>
      {/* Left Sidebar - Fixed width, always visible */}
      <aside className="fixed top-0 left-0 h-full w-80 bg-gray-100 dark:bg-gray-800 shadow-lg z-30 transition-all duration-300">
        <div className="flex flex-col h-full">
          {/* Profile Section with Theme Toggle */}
          <div className="p-6 text-center border-b border-gray-200 dark:border-gray-700">
           
            
            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-md">
              <img 
                src="/muba.png" 
                alt="Mubashir Mohsin" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name */}
            <h2 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
              MUBASHIR MOHSIN
            </h2>
            
            {/* Professional Title */}
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-tight">
              Research Assistant at American International University—Bangladesh (AIUB) | AI, ML, DL Researcher | Healthcare | Cybersecurity | Data Privacy 
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 px-2">
              Contact
            </h3>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <link.icon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Lab Button */}
            <div className="mt-8 px-2">
              <a
                href="https://resources.workstationindustries.com/hs-fs/hubfs/Blog_Images/Body_Images/The-Rookie.jpeg?width=765&name=The-Rookie.jpeg" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 rounded-md transition-all duration-200
                  bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 
                  text-white font-medium shadow-md"
              >
                <span>My Lab</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div><br />
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <Switch 
                  checked={isDarkMode} 
                  onCheckedChange={setIsDarkMode} 
                  className="data-[state=checked]:bg-blue-600" 
                />
                <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
            </div>
            
          </div>
          
        </div>
      </aside>
      

      {/* Main Content */}
      <div className="ml-80 transition-all duration-300">
        {/* Navigation at the top */}
        <Navigation />
        
        {/* Content */}
        <main className="p-6 md:p-8">
          {children}
        </main>
      </div>
      
    </div>
  );
};

export default MainLayout;
