
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";
import AiAgentWorkflow from "../components/sections/AiAgentWorkflow";
import AiModelTraining from "../components/sections/AiModelTraining";
import AiUseCases from "../components/sections/AiUseCases";
import ModelTrainingPipeline from "../components/sections/ModelTrainingPipeline";

const AiSolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-10 bg-gray-50 dark:bg-rearway-navy/20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">
                AI <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our cutting-edge AI solutions that help businesses automate processes, 
                gain meaningful insights, and create powerful customer experiences
              </p>
            </div>
          </div>
        </section>
        
        <AiAgentWorkflow />
        <AiModelTraining />
        <AiUseCases />
        <ModelTrainingPipeline />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AiSolutionsPage;
