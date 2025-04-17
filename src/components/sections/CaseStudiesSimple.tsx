
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudiesSummary = [
  {
    id: 1,
    title: "Scaling eCommerce Operations",
    client: "DealBuddy",
    result: "15,000+ transactions during peak sales with zero downtime"
  },
  {
    id: 2,
    title: "Financial Data Integration",
    client: "Hive Wealth",
    result: "Connected with 500+ financial institutions securely"
  },
  {
    id: 3,
    title: "Enterprise ERP Customization",
    client: "Besync",
    result: "73% reduction in development time for new modules"
  }
];

const CaseStudiesSimple = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50 dark:bg-rearway-navy/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses overcome their technical challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {caseStudiesSummary.map((study) => (
            <div 
              key={study.id}
              className="bg-white dark:bg-gray-800/40 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <p className="text-sm font-medium text-rearway-blue mb-3">Client: {study.client}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{study.result}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/case-studies" className="inline-flex items-center text-rearway-blue dark:text-blue-400 font-medium hover:underline">
            View all case studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSimple;
