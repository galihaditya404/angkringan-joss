'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/motion/fade-in';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] grid lg:grid-cols-2 border-b border-border bg-background overflow-hidden">

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-lines opacity-[0.03] pointer-events-none"></div>

      {/* Left Content */}
      <div className="relative flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 border-r border-border z-10">

        <FadeIn delay={0.1} direction="down">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-2 w-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Est. 2026 // Yogyakarta</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter uppercase leading-[0.85] mb-8 text-foreground">
            Coffee <br />
            <span className="text-accent">Comfort</span> <br />
            Culture
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg text-muted max-w-md leading-relaxed font-medium mb-12">
            The soul of an Angkringan, codified. <br />
            Precision brewing // Community grounding.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="flex flex-col sm:flex-row gap-0 border border-foreground w-fit">
            <Button size="lg" className="rounded-none h-14 px-8 bg-foreground text-background hover:bg-accent hover:text-white border-r border-background/20 font-bold uppercase transition-all">
              View Menu
              <ArrowRight className="ml-4 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="lg" className="rounded-none h-14 px-8 hover:bg-surface text-foreground font-bold uppercase transition-all">
              Locations
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Right Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
        className="relative h-[50vh] lg:h-auto bg-surface flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-neutral-100">
          {/* Placeholder for a stark, high contrast black and white photo */}
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>

            {/* Abstract Composition - Animated */}
            <motion.div
              initial={{ rotate: 0, scale: 0.8 }}
              animate={{ rotate: -6, scale: 1 }}
              transition={{ duration: 1.2, ease: "backOut" }}
              className="relative z-10 w-64 h-80 border-4 border-foreground bg-white flex items-center justify-center shadow-2xl shadow-black/10"
            >
              <span className="font-heading font-black text-9xl text-accent opacity-20 rotate-6">J</span>
            </motion.div>
            <div className="absolute z-0 w-64 h-80 bg-foreground transform rotate-3 translate-x-4 translate-y-4"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 bg-white border-t border-r border-border p-6">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            Lat: -7.7956 <br />
            Long: 110.3695
          </p>
        </div>
      </motion.div>
    </section>
  );
}
