
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Deal Buddy",
      description: "End-to-end eCommerce platform with scalable architecture using AWS and distributed system principles, helping them from ideation to launch.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tags: ["eCommerce", "AWS", "Distributed Systems"],
      link: "#"
    },
    {
      id: 2,
      title: "Security Core",
      description: "Advanced security solution with real-time threat detection and prevention, designed for enterprise-level protection.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Security", "Monitoring", "Enterprise"],
      link: "#"
    },
    {
      id: 3,
      title: "AI Assistant",
      description: "Custom AI-powered business tool that automates repetitive tasks and provides data-driven insights for decision making.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
      tags: ["AI", "Business Intelligence", "Automation"],
      link: "#"
    },
    {
      id: 4,
      title: "GameMaster Platform",
      description: "Gamified learning platform that enhances user engagement through interactive challenges and reward systems.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Gamification", "Education", "React"],
      link: "#"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-rearway-navy/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title gradient-text mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We design and develop custom software solutions that drive business growth and innovation
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-800/40 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-rearway-blue font-medium hover:underline"
                  >
                    View Project
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet View - Slider */}
        <div className="lg:hidden">
          <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img 
                src={projects[currentSlide].image} 
                alt={projects[currentSlide].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
              
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {projects[currentSlide].tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={prevSlide} 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextSlide} 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-800/40">
              <h3 className="text-2xl font-bold mb-3">{projects[currentSlide].title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{projects[currentSlide].description}</p>
              
              {projects[currentSlide].link && (
                <a 
                  href={projects[currentSlide].link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-rearway-blue font-medium hover:underline"
                >
                  View Project
                  <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-gradient-primary' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
