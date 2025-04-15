
import { CheckCircle, Users, BarChart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-rearway-navy/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">
              About <span className="gradient-text">Rearway Technologies</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Rearway Technologies is a cutting-edge software solutions company dedicated to transforming ideas into powerful, scalable applications. Our team of expert developers, designers, and strategists work together to create solutions that drive business growth and innovation.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We've built end-to-end products for startups like Deal Buddy, helping them from ideation to scalable architecture using AWS and distributed system principles. We also assist startups in building and scaling technical teams with modern, efficient, and scalable product engineering support.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-rearway-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">End-to-End Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">We handle everything from initial concept to final deployment.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-rearway-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Scalable Architecture</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our solutions are built to grow with your business using cloud technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-rearway-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Technical Team Building</h3>
                  <p className="text-gray-600 dark:text-gray-300">We help startups build and scale efficient technical teams.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Main image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team collaborating" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Stats cards */}
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-rearway-navy rounded-lg p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold">500+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Satisfied Clients</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 bg-white dark:bg-rearway-navy rounded-lg p-4 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                  <BarChart size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold">98%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Project Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission/Vision */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800/40 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To empower businesses with innovative, reliable, and scalable software solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800/40 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be the leading software development partner known for technical excellence, innovative solutions, and exceptional client satisfaction across diverse industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
