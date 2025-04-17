
import { useState, useRef, useEffect } from "react";
import { Brain, Database, Server, Code, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const solutions = [
  {
    id: "llm-training",
    title: "Custom LLM Training",
    icon: <Brain />,
    description: "We fine-tune large language models on your specific data to create AI solutions that speak your business language.",
    features: [
      "Domain-specific knowledge integration",
      "Customized responses aligned with your brand",
      "Continuous improvement from user interactions",
      "Privacy-focused training methodology"
    ]
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline Setup",
    icon: <Database />,
    description: "We build robust data pipelines that feed your AI models with clean, structured data for optimal performance.",
    features: [
      "Automated data collection and preprocessing",
      "Real-time data streaming integration",
      "Data quality monitoring and validation",
      "Scalable infrastructure for growing datasets"
    ]
  },
  {
    id: "cloud-deployment",
    title: "AWS Cloud Deployment",
    icon: <Server />,
    description: "We leverage AWS services to deploy your AI models in production environments with scalability and security.",
    features: [
      "SageMaker for model training and deployment",
      "Lambda functions for serverless execution",
      "API Gateway for secure access control",
      "CloudWatch for monitoring and logging"
    ]
  },
  {
    id: "integration",
    title: "System Integration",
    icon: <Code />,
    description: "We seamlessly integrate AI models into your existing software architecture and business workflows.",
    features: [
      "API development for cross-platform communication",
      "Webhooks and event-driven architecture",
      "Legacy system compatibility",
      "Comprehensive documentation and support"
    ]
  },
  {
    id: "analytics",
    title: "Performance Analytics",
    icon: <BarChart3 />,
    description: "We provide tools to track and measure the impact of AI solutions on your business metrics.",
    features: [
      "Custom dashboards for KPI monitoring",
      "A/B testing frameworks for optimization",
      "ROI calculation and reporting",
      "Actionable insights for continuous improvement"
    ]
  }
];

const AiModelTraining = () => {
  const [activeTab, setActiveTab] = useState("llm-training");
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      featureItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [activeTab]);

  return (
    <section id="ai-training" className="py-20 bg-white dark:bg-rearway-navy/10">
      <div className="container-custom">
        <div className="text-center mb-16 reveal-animation" ref={sectionRef}>
          <h2 className="section-title mb-4">
            AI Model <span className="gradient-text">Training & Custom Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We develop custom AI solutions tailored to your specific business needs, from training specialized models to deploying them in production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
          <div className="lg:col-span-1 lg:mt-40 mt-32">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex flex-col space-y-2 w-full bg-transparent">
                {solutions.map(solution => (
                  <TabsTrigger 
                    key={solution.id} 
                    value={solution.id}
                    className="w-full justify-start gap-3 p-4 text-left data-[state=active]:bg-gradient-primary data-[state=active]:text-white transition-all duration-300"
                  >
                    <div className="w-6 h-6">{solution.icon}</div>
                    <span>{solution.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="lg:col-span-2 lg:mt-0 mt-28">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {solutions.map(solution => (
                <TabsContent key={solution.id} value={solution.id} className="mt-0">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="h-2 bg-gradient-primary"></div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                          {solution.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{solution.title}</h3>
                      </div>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        {solution.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {solution.features.map((feature, index) => (
                          <div 
                            key={index} 
                            className="feature-item reveal-animation flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/30"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-primary flex-shrink-0 flex items-center justify-center text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </div>
                            <p className="text-gray-700 dark:text-gray-200">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiModelTraining;
