
import { useRef, useEffect } from "react";
import { Server, Database, GitBranch, Code } from "lucide-react";

const techStacks = [
  {
    category: "Backend",
    icon: <Server className="h-8 w-8" />,
    techs: [
      { name: "NestJS", description: "For scalable and maintainable server-side applications" },
      { name: "TypeScript", description: "Type-safe code with enhanced developer experience" },
      { name: "PostgreSQL", description: "Robust and reliable database solution" },
      { name: "Redis", description: "High-performance caching and data storage" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Database className="h-8 w-8" />,
    techs: [
      { name: "AWS EC2/ECS", description: "Scalable compute resources for applications" },
      { name: "AWS Lambda", description: "Serverless functions for event-driven architecture" },
      { name: "S3/CloudFront", description: "Content storage and distribution" },
      { name: "SageMaker", description: "For AI model training and deployment" }
    ]
  },
  {
    category: "DevOps",
    icon: <GitBranch className="h-8 w-8" />,
    techs: [
      { name: "CI/CD Pipelines", description: "Automated testing and deployment workflows" },
      { name: "Docker", description: "Containerization for consistent environments" },
      { name: "Kubernetes", description: "Container orchestration for high availability" },
      { name: "Terraform", description: "Infrastructure as code for reliable deployments" }
    ]
  },
  {
    category: "Architecture",
    icon: <Code className="h-8 w-8" />,
    techs: [
      { name: "Microservices", description: "Modular, independently deployable services" },
      { name: "Event-Driven", description: "Reactive systems with loose coupling" },
      { name: "API Gateway", description: "Centralized API management and security" },
      { name: "Domain-Driven Design", description: "Business-focused software architecture" }
    ]
  }
];

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    stackRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      stackRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      
      techItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-rearway-navy/20">
      <div className="container-custom">
        <div className="text-center mb-16 reveal-animation" ref={sectionRef}>
          <h2 className="section-title mb-4">
            Tech Stack and <span className="gradient-text">Engineering Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage modern technologies and engineering practices to build robust, scalable, and maintainable software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map((stack, stackIndex) => (
            <div 
              key={stack.category} 
              className="reveal-animation"
              ref={el => stackRefs.current[stackIndex] = el}
              style={{ animationDelay: `${stackIndex * 150}ms` }}
            >
              <div className="bg-white dark:bg-gray-800/40 rounded-xl shadow-lg p-6 h-full border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                    {stack.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{stack.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {stack.techs.map((tech, techIndex) => (
                    <div 
                      key={tech.name} 
                      className="tech-item reveal-animation flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-300"
                      style={{ animationDelay: `${(stackIndex * 4 + techIndex) * 100}ms` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-primary flex-shrink-0 flex items-center justify-center text-white mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{tech.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-animation">
          <a 
            href="https://github.com/rearway" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 btn-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Visit Our GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
