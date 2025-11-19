'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    '2+ years of proven expertise',
    'Based in the breathtaking Himalayan city of Dehradun, Uttarakhand',
    'Successfully delivered 10+ client projects',
    'Client satisfaction rate of 100%',
    'Latest technology expertise',
    '24/7 Support and maintenance',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                About Kailshians Web Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nestled in the beautiful Himalayan city of Dehradun, Uttarakhand, Kailshians Web Services is dedicated to transforming businesses through innovative digital solutions. We combine technical excellence with creative vision to deliver projects that exceed expectations.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">🏔️</div>
                <h3 className="text-2xl font-bold text-foreground">Mountain Strength</h3>
                <p className="text-muted-foreground mt-2">
                  Like the mountains that surround us, our solutions are solid, reliable, and built to last.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Why Choose Us</p>
                <ul className="space-y-3 text-foreground">
                  <li>✓ End-to-end development solutions</li>
                  <li>✓ Agile and flexible approach</li>
                  <li>✓ Transparent communication</li>
                  <li>✓ On-time project delivery</li>
                  <li>✓ Post-launch support included</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
