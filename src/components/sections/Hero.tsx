
import { ArrowRight } from "lucide-react";
import heroImage from '../../assets/images/Software Company Background Collage.webp'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-rearway-navy dark:to-black -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-primary rounded-full filter blur-[100px] opacity-20 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400 rounded-full filter blur-[120px] opacity-10 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Software Solutions
              <span className="block gradient-text">Made Simple</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We build technology that solves real business problems, from eCommerce to AI applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#services" className="btn-primary flex items-center justify-center gap-2">
                Explore Solutions
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="py-3 px-6 rounded-lg border-2 border-rearway-blue text-rearway-blue font-medium flex items-center justify-center gap-2 transition-colors hover:bg-rearway-blue/10">
                Contact Us
              </a>
            </div>

            <Collapsible 
              open={isOpen} 
              onOpenChange={setIsOpen} 
              className="bg-white/80 dark:bg-gray-800/30 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-2"
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between p-2 text-sm font-medium">
                <span>Learn more about our approach</span>
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4">
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    We partner with businesses of all sizes to create end-to-end software solutions that drive growth and efficiency.
                  </p>
                  <p>
                    Our team of expert developers, designers, and strategists work together to deliver technology that makes a real difference for your business.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                        </svg>
                      </div>
                      <span className="font-medium">Fast Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                      </div>
                      <span className="font-medium">Quality Assured</span>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md relative">
              {/* Main Image */}
              <div className="bg-white dark:bg-rearway-navy/70 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 animate-fade-in">
                <img 
                  src={heroImage}
                  alt="Software Development" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
