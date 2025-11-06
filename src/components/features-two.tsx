"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  return (
    <section>
      <motion.div
        className="bg-muted/50 py-24"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div>
            <h2 className="text-foreground text-4xl font-semibold">
              Interactive Academic Assistance
            </h2>
            <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
              Engage with university resources through it's RAG system. Get
              instant answers to your academic questions in a gamified,
              arcade-style interface.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden" variant="soft">
                <Image
                  src="/Untitled2.png"
                  alt="Multi-Layer Query Processing"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Intelligent Query Processing
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  Advanced AI analyzes your questions through multi-layer
                  processing, delivering contextually accurate answers with 85%+
                  precision in under 2 seconds.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden" variant="soft">
                <Image
                  src="/Untitled3.png"
                  alt="Unified Campus Systems"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Unified Campus Intelligence
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  Access information from UMS, hostel systems, fee portals, and
                  placement cells—all connected through one intelligent
                  interface that learns continuously.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden" variant="soft">
                <Image
                  src="/Untitled4.png"
                  alt="Self-Learning AI System"
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Self-Improving AI System
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  Every unanswered question becomes a learning opportunity—the
                  system automatically captures, reviews, and integrates new
                  knowledge to serve you better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
