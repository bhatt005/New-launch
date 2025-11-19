'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/contact-modal';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-sm font-medium text-primary">Based in Dehradun, Uttarakhand</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Transform Ideas into Digital Reality
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We build exceptional web and mobile applications using cutting-edge technologies. From startups to enterprises, we deliver innovative solutions that drive growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          {/* Added Start Conversation button that opens the contact form */}
          <ContactModal>
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              Start Conversation <ArrowRight size={20} />
            </Button>
          </ContactModal>
          <Button size="lg" variant="outline">
            View Our Work
          </Button>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">2+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">10+</div>
            <p className="text-sm text-muted-foreground">Clients & Projects</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
