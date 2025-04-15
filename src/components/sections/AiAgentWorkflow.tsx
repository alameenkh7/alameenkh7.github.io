
import { useEffect, useRef } from "react";
import { ArrowRight, Brain, Database, MessagesSquare, BarChart, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Business Need Identification",
    description: "We analyze your business requirements and identify where AI agents can create the most value.",
    icon: <Brain className="h-10 w-10 text-white" />,
    color: "from-rearway-blue to-blue-400"
  },
  {
    title: "Data Flow & Integration",
    description: "We establish secure data pipelines and integrate with your existing systems and databases.",
    icon: <Database className="h-10 w-10 text-white" />,
    color: "from-blue-500 to-violet-500"
  },
  {
    title: "AI Agent Deployment",
    description: "We deploy custom-trained AI agents tailored to your specific business needs.",
    icon: <MessagesSquare className="h-10 w-10 text-white" />,
    color: "from-violet-500 to-rearway-purple"
  },
  {
    title: "Real-Time Decision Making",
    description: "Your AI agents process data in real-time, making intelligent decisions and providing valuable insights.",
    icon: <BarChart className="h-10 w-10 text-white" />,
    color: "from-rearway-purple to-purple-400"
  },
  {
    title: "Continuous Learning & Improvement",
    description: "Your AI agents continue to learn from interactions, constantly improving their performance.",
    icon: <RefreshCw className="h-10 w-10 text-white" />,
    color: "from-purple-400 to-rearway-blue"
  }
];

const AiAgentWorkflow = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.workflow-card');
    if (!cards) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 150); // Staggered animation
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="ai-workflow" className="py-20 bg-gray-50 dark:bg-rearway-navy/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            How Our <span className="gradient-text">AI Agents</span> Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI agents follow a structured workflow that ensures seamless integration with your business processes and delivers real value.
          </p>
        </div>

        <div ref={cardsRef} className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-primary transform -translate-y-1/2 rounded-full opacity-50 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="workflow-card reveal-animation flex flex-col">
                <Card className="flex-1 overflow-hidden border-0 shadow-lg card-hover relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-center">Step {index + 1}</h3>
                    <h4 className="text-lg font-semibold mb-3 text-center">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex justify-center mt-4">
                    <ArrowRight className="text-rearway-blue animate-pulse" />
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

export default AiAgentWorkflow;
