import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; 
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form data submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactDetails = [
    { icon: Mail, text: "asipulb16@gmail.com", href: "mailto:asipulb16@gmail.com" },
    { icon: Phone, text: "+62 813-8090-2374", href: "https://wa.me/6281380902374" },
    { icon: MapPin, text: "Rajeg, Kab. Tangerang", href: "https://maps.app.goo.gl/D2E3ZJTt1fyCBV1H8" },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out via email, phone, or the contact form. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <a 
                    key={index} 
                    href={detail.href} 
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                    target={detail.href.startsWith('http') ? '_blank' : undefined}
                    rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <detail.icon className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    <span>{detail.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 md:p-8 bg-card rounded-lg shadow-xl border-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <Label htmlFor="name" className="text-foreground">Full Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
                className="mt-1 bg-background/50 focus:bg-background"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com" 
                required 
                className="mt-1 bg-background/50 focus:bg-background"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground">Your Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi there, I'd like to talk about..." 
                rows={5} 
                required 
                className="mt-1 bg-background/50 focus:bg-background"
              />
            </div>
            <Button type="submit" className="w-full shadow-md hover:shadow-primary/50" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <motion.div 
                    className="mr-2 w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;