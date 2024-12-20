"use client";

import { motion } from "framer-motion";
import { Code, Zap, Palette, Layout, Users, ChevronRight } from "lucide-react";
import React from "react";
import Image from "next/image";
function FeaturesSection() {
  return (
    <section id="components" className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          My Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "/Pear-logo-accent-1.svg",
              title: "PEAR Health Labs",
              description: "White-label Smart Fitness Platform",
            },
            {
              icon: "/mw-logo-straight.svg",
              title: "MeaningfulWork",
              description:
                "Nonprofit Fundraising & Volunteer Management Platform",
            },
            {
              icon: "/Rise Up. Logo no background.png",
              title: "Public Health Agency of British Columbia",
              description: "Volunteer Management Software",
            },
            {
              icon: "/Pelicargo_Logo_(002).png",
              title: "Pelicargo",
              description: "Air Fright Sourcing Software",
            },
            {
              icon: "/sorceri.svg",
              title: "Sorceri",
              description: "Carbon Accounting Software",
            },
            {
              icon: "/cubby.png",
              title: "GoCubby",
              description: "Daycare Marketplace",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:bg-slate-300 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={feature.icon}
                height="100"
                width="300"
                className="object-cover object-left-top inset-0"
                alt=""
              />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
