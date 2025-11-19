'use client';

import { Globe, Smartphone, Code, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and TypeScript for optimal performance.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps using React Native and Flutter for iOS and Android.',
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Scalable server solutions with Node.js, Express, and Python for robust application infrastructure.',
    },
    {
      icon: Database,
      title: 'Database & DevOps',
      description: 'Firebase integration, database design, and deployment solutions for reliability and scale.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web and mobile development solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group"
              >
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
