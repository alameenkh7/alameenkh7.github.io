
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
              Transforming Ideas into
              <span className="block gradient-text">Cutting-Edge Software</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We build end-to-end software solutions that propel businesses forward. 
              From eCommerce to AI-powered applications, we create technology that makes a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary flex items-center justify-center gap-2">
                Explore Our Services
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="py-3 px-6 rounded-lg border-2 border-rearway-blue text-rearway-blue font-medium flex items-center justify-center gap-2 transition-colors hover:bg-rearway-blue/10">
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg relative">
              {/* Main Image */}
              <div className="bg-white dark:bg-rearway-navy/70 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                  alt="Software Development" 
                  className="w-full h-auto"
                />
                
                {/* Floating Card Elements */}
                <div className="absolute -left-6 -bottom-6 bg-white dark:bg-rearway-navy rounded-lg p-4 shadow-lg transform rotate-6 animate-pulse border border-rearway-blue/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Fast Development</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Agile Methodology</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-6 top-24 bg-white dark:bg-rearway-navy rounded-lg p-4 shadow-lg transform -rotate-3 border border-rearway-purple/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Quality Assured</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Rigorous Testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
