import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Send form data to backend
      await apiRequest('POST', '/api/contact', data);
      
      // Create WhatsApp link with formatted message
      const whatsappMessage = `*New Contact from Portfolio Website*%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone || 'Not provided'}%0A*Company:* ${data.company || 'Not provided'}%0A*Subject:* ${data.subject}%0A%0A*Message:*%0A${data.message}`;
      const whatsappUrl = `https://wa.me/966559201358?text=${whatsappMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Send email using mailto link
      const mailtoSubject = encodeURIComponent(data.subject);
      const mailtoBody = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nCompany: ${data.company || 'Not provided'}\n\nMessage:\n${data.message}`);
      const mailtoUrl = `mailto:rwahla7@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      // Open default email client
      window.location.href = mailtoUrl;
      
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. The message has been sent to WhatsApp and Email.",
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact directly via WhatsApp or Email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-4">Get in Touch</h2>
          <p className="text-lg text-[#25092e] opacity-80 text-center mb-12 max-w-2xl mx-auto">
            Interested in hiring me for your institution, collaborating on a project, or seeking private tutoring? 
            Send me a message and I'll get back to you soon.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="lg:col-span-3"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 gradient-border hover-grow">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-[#25092e] mb-1">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-[#25092e] mb-1">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email" 
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-[#25092e] mb-1">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="tel" 
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium text-[#25092e] mb-1">Company/Institution</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-[#25092e] mb-1">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-[#25092e] mb-1">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#A3886b] hover:bg-opacity-90 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 gradient-border h-full">
              <h3 className="font-semibold text-xl text-[#A3886b] mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-4 mt-1">
                    <i className="fas fa-map-marker-alt text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#25092e]">Location</h4>
                    <p className="text-[#25092e] opacity-80 mt-1">Du-Al-Hulaifah District, Madinah Almunawara, Saudi Arabia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-4 mt-1">
                    <i className="fas fa-envelope text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#25092e]">Email</h4>
                    <a 
                      href="mailto:rwahla7@gmail.com" 
                      className="text-[#f2c0DD] hover:text-[#A3886b] transition-colors duration-300 mt-1 block"
                    >
                      rwahla7@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-4 mt-1">
                    <i className="fas fa-phone-alt text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#25092e]">Phone</h4>
                    <a 
                      href="tel:00966559201358" 
                      className="text-[#25092e] opacity-80 hover:text-[#A3886b] transition-colors duration-300 mt-1 block"
                    >
                      +966 55 920 1358
                    </a>
                    <a 
                      href="https://wa.me/966559201358" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#25AA63] hover:text-[#128C7E] transition-colors duration-300 mt-2 inline-flex items-center"
                    >
                      <i className="fab fa-whatsapp mr-1"></i> Message on WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="font-medium text-[#25092e] mb-3">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-[#f2c0DD] bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300">
                      <i className="fab fa-linkedin-in text-[#f2c0DD]"></i>
                    </a>
                    <a href="#" className="bg-[#f2c0DD] bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300">
                      <i className="fab fa-twitter text-[#f2c0DD]"></i>
                    </a>
                    <a href="#" className="bg-[#f2c0DD] bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300">
                      <i className="fab fa-researchgate text-[#f2c0DD]"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
