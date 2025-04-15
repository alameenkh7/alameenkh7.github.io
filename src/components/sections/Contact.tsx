
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-rearway-navy/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-primary opacity-5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-400 opacity-5 rounded-tr-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title gradient-text mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a project in mind? Let's discuss how we can bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Reach out to us through any of these channels and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a href="mailto:alameen@rearway.com" className="text-gray-600 dark:text-gray-300 hover:text-rearway-blue dark:hover:text-rearway-blue transition-colors">
                      alameen@rearway.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <a href="tel:8113871897" className="text-gray-600 dark:text-gray-300 hover:text-rearway-blue dark:hover:text-rearway-blue transition-colors">
                      8113871897
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Website</h4>
                    <a href="https://www.rearway.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-rearway-blue dark:hover:text-rearway-blue transition-colors">
                      www.rearway.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 hidden lg:block">
              <h4 className="text-xl font-bold mb-3">Working Hours</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-800/40 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            {formStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-rearway-blue focus:border-transparent bg-white dark:bg-gray-700"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-rearway-blue focus:border-transparent bg-white dark:bg-gray-700"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-rearway-blue focus:border-transparent bg-white dark:bg-gray-700"
                  >
                    <option value="">Select a Subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="eCommerce Development">eCommerce Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Gamified Applications">Gamified Applications</option>
                    <option value="Security Solutions">Security Solutions</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-rearway-blue focus:border-transparent bg-white dark:bg-gray-700"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {formStatus === "sending" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
