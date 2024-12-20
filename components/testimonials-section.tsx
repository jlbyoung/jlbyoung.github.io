"use client";

import { motion } from "framer-motion";
import React from "react";

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-22 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          Flexible Options
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Full-time",
              role: "Frontend Developer",
              quote: "Seeking long-term career growth & opportunity",
            },
            {
              name: "Retainer",
              role: "UI/UX Designer",
              quote:
                "Accelerate your development team, consultancy, code reviews ",
            },
            {
              name: "Contract/C2C",
              role: "Full Stack Developer",
              quote:
                "Project to project, fast development times, clear scope of work",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-slate-300 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
