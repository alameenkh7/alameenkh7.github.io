
import { useState, useRef, useEffect } from 'react';
import { Database, FileInput, Brain, FileCheck, Server } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const steps = [
  {
    id: 'data-collection',
    title: 'Data Collection',
    icon: <Database className="h-8 w-8" />,
    description: 'Gather domain-specific data from various sources including documents, APIs, databases, and user interactions.',
    details: 'We create comprehensive data collection strategies tailored to your specific domain, ensuring high-quality training material for your AI models.'
  },
  {
    id: 'preprocessing',
    title: 'Preprocessing',
    icon: <FileInput className="h-8 w-8" />,
    description: 'Clean, normalize, and structure data to create optimal training datasets for machine learning models.',
    details: 'Our preprocessing pipeline handles outlier detection, missing data imputation, normalization, tokenization, and feature engineering.'
  },
  {
    id: 'training',
    title: 'Training',
    icon: <Brain className="h-8 w-8" />,
    description: 'Train and fine-tune AI models on your data using the latest techniques in machine learning and deep learning.',
    details: 'We leverage transfer learning from foundational models and fine-tune them on your specific data to create custom AI solutions that truly understand your business domain.'
  },
  {
    id: 'evaluation',
    title: 'Evaluation',
    icon: <FileCheck className="h-8 w-8" />,
    description: 'Rigorously test models with various metrics to ensure they meet performance requirements and business objectives.',
    details: 'Our evaluation framework includes not just technical metrics like accuracy and F1 score, but also business-oriented metrics that measure real-world performance impact.'
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: <Server className="h-8 w-8" />,
    description: 'Deploy models to production environments with monitoring, scaling, and version control systems.',
    details: 'We deploy your AI models in secure, scalable cloud environments with CI/CD pipelines, monitoring tools, and automated rollback capabilities.'
  }
];

const ModelTrainingPipeline = () => {
  const [activeStep, setActiveStep] = useState('');
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    if (pipelineRef.current) {
      observer.observe(pipelineRef.current);
    }

    const stepElements = document.querySelectorAll('.pipeline-step');
    stepElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      if (pipelineRef.current) {
        observer.unobserve(pipelineRef.current);
      }
      stepElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="training-pipeline" className="py-20 bg-white dark:bg-rearway-navy/10">
      <div className="container-custom">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="section-title mb-4">
            Model Training <span className="gradient-text">Pipeline</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive training pipeline ensures high-quality AI models that deliver real business value.
          </p>
        </div>

        <div 
          ref={pipelineRef} 
          className="relative reveal-animation mx-auto max-w-5xl"
        >
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary transform -translate-y-1/2 rounded-full opacity-50 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`pipeline-step reveal-animation group relative z-10`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div 
                      className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${activeStep === step.id ? 'scale-105' : ''}`}
                      onMouseEnter={() => setActiveStep(step.id)}
                      onMouseLeave={() => setActiveStep('')}
                    >
                      <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 z-10">
                        <div className="text-rearway-blue group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 hidden md:block">{step.description}</p>
                      </div>
                      
                      {/* Animated dot on the line */}
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white z-0 border-2 border-rearway-blue group-hover:bg-rearway-blue transition-colors duration-300 hidden md:block"></div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4 shadow-xl border-0">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                          {step.icon}
                        </div>
                        <h4 className="font-bold">{step.title}</h4>
                      </div>
                      <p className="text-sm">{step.details}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 transform translate-x-1/2 z-20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-rearway-blue animate-pulse"
                    >
                      <path
                        d="M12 4L20 12L12 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelTrainingPipeline;
