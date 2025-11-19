'use client';

import { Card } from '@/components/ui/card';
import { Users, BookOpen, Zap } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a vibrant community of developers, students, and innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 hover:shadow-lg transition-all">
            <div className="mb-6 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Student Community</h3>
            <p className="text-muted-foreground mb-4">
              We nurture the next generation of developers through mentorship, workshops, and real-world projects.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Free bootcamps & workshops</li>
              <li>✓ Mentorship programs</li>
              <li>✓ Internship opportunities</li>
            </ul>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all border-2 border-primary/50">
            <div className="mb-6 w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">DevFest Chandigarh Partner</h3>
            <p className="text-muted-foreground mb-4">
              Proud community partner of DevFest Chandigarh, fostering innovation and collaboration in the region.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Event partnerships</li>
              <li>✓ Technical talks</li>
              <li>✓ Community engagement</li>
            </ul>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all">
            <div className="mb-6 w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Learning Resources</h3>
            <p className="text-muted-foreground mb-4">
              Sharing knowledge through blogs, tutorials, and open-source contributions to empower developers.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Technical blog</li>
              <li>✓ Video tutorials</li>
              <li>✓ Open source projects</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
