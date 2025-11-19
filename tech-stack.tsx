'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function TechStack() {
  const technologies = [
    { name: 'React', logo: '/tech/react.png' },
    { name: 'Node.js', logo: '/tech/nodejs.png' },
    { name: 'Angular', logo: '/tech/angular.png' },
    { name: '.NET', logo: '/tech/dotnet.png' },
    { name: 'WordPress', logo: '/tech/wordpress.png' },
    { name: 'Next.js', logo: '/tech/nextjs.png' },
    { name: 'HTML5', logo: '/tech/html5.png' },
    { name: 'CSS3', logo: '/tech/css3.png' },
    { name: 'JavaScript', logo: '/tech/javascript.png' },
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with the latest and most powerful technologies to build scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="font-semibold text-foreground text-sm">{tech.name}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">And Many More</h3>
          <p className="text-muted-foreground">
            We continuously stay updated with the latest technologies and frameworks. Whether it's Python, Tailwind CSS, AWS, Docker, Kubernetes, or emerging tech, we adapt to what best serves your project.
          </p>
        </div>
      </div>
    </section>
  );
}
