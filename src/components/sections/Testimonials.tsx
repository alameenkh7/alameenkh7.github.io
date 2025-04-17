
import { useState } from "react";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Basil Nalakath",
      position: "CEO",
      company: "Deal Buddy",
      content: "Rearway made the daunting task of launching our application feel like a breeze. Their team's approachability and sincere dedication to our project were truly refreshing. The innovative solutions in mobile app development brought our ideas to life, and their easy-to-approach attitude made the entire process smooth. I'm grateful for the expertise and support Rearway provided.",
      image: "https://bid-365-dev-images.s3.ap-south-1.amazonaws.com/images/1740718263333.jpeg",
      rating: 5
    },
    {
      id: 2,
      name: "Kingsley Okeyere",
      position: "CTO",
      company: "Mixtape Madness",
      content: "Our web application developed by Rearway is not only visually stunning but also highly functional. From dynamic websites to complex applications, their team showcased expertise in Java, Spring, and Spring Boot for robust back-end development",
      image: "https://bid-365-dev-images.s3.ap-south-1.amazonaws.com/images/1556141337677.jpeg",
      rating: 4
    },
    {
      id: 3,
      name: "Arwitwik ",
      position: "Co founder",
      company: "Wizad AI",
      content: "Working with Rearway was a game-changer for our business. Their innovative approach to mobile app development transformed our ideas into a user-friendly and engaging application. The team's expertise in Flutter and React Native ensured a seamless experience across platforms. I highly recommend Rearway for turning your app dreams into reality.",
      image: "https://bid-365-dev-images.s3.ap-south-1.amazonaws.com/images/1612038721527.jpeg",
      rating: 5
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-rearway-navy/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-20 w-80 h-80 bg-gradient-primary rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-blue-400 rounded-full filter blur-[100px] opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title gradient-text mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="bg-white dark:bg-gray-800/40 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 mb-4">
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt={testimonials[currentSlide].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <h4 className="text-xl font-bold text-center">{testimonials[currentSlide].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center mb-2">
                    {testimonials[currentSlide].position}
                  </p>
                  <p className="text-rearway-blue font-medium text-center mb-4">
                    {testimonials[currentSlide].company}
                  </p>
                  
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18}
                        fill={i < testimonials[currentSlide].rating ? "currentColor" : "none"}
                        className={i < testimonials[currentSlide].rating ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <svg className="text-gray-300 dark:text-gray-600 w-12 h-12 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonials[currentSlide].content}"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden">
            <div className="bg-white dark:bg-gray-800/40 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 mb-4">
                  <img 
                    src={testimonials[currentSlide].image} 
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <h4 className="text-xl font-bold text-center">{testimonials[currentSlide].name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-1">
                  {testimonials[currentSlide].position}
                </p>
                <p className="text-rearway-blue font-medium text-center mb-3">
                  {testimonials[currentSlide].company}
                </p>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16}
                      fill={i < testimonials[currentSlide].rating ? "currentColor" : "none"}
                      className={i < testimonials[currentSlide].rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                
                <svg className="text-gray-300 dark:text-gray-600 w-10 h-10 mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4 italic">
                  "{testimonials[currentSlide].content}"
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-gradient-primary' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
