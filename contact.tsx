'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Dehradun, Uttarakhand, India</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">
              <a href="mailto:thekailshians@gmail.com" className="hover:text-primary transition-colors">
                thekailshians@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">
              <a href="tel:+919815067286" className="hover:text-primary transition-colors">
                +91 98150 67286
              </a>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Let's Build Something Amazing</h3>
          <p className="text-muted-foreground mb-6">
            Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
