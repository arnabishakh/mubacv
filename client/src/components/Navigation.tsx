
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Linkedin, Mail, Github, User, ExternalLink } from "lucide-react";


const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const sections = [
    
    { id: "education", name: "Education" },
    { id: "research", name: "Research" },
    { id: "publications", name: "Publications" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "courses", name: "Courses" },
    { id: "references", name: "References" },
  ];
   // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Function to determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find the current active section
      const current = sections
        .map(section => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return { 
              id: section.id, 
              offset: Math.abs(rect.top)
            };
          }
          return { id: section.id, offset: Infinity };
        })
        .reduce((prev, curr) => {
          return prev.offset < curr.offset ? prev : curr;
        });
      
      if (current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 py-2 px-6 sticky top-0 z-10 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap justify-center gap-1 md:gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`
              px-3 py-1.5 text-sm font-medium rounded transition-all duration-200
              ${activeSection === section.id 
                ? "bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
              }
            `}
          >
            {section.name}
          </button>
        ))}

        
      </div>
      
    </nav>
  );
};

export default Navigation;
