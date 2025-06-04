"use client"

import { StepsHeader } from "./StepsHeader";
import { PageHeader } from "./PageHeader";
import { features, steps } from "../constants";
import { SkipGrid } from "./SkipGrid";
import { Card } from "./ui/card";
import { useState } from "react";

export function SkipSelectorPage() {
    const [currentStep] = useState(3);

  return (
    <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative">
        <div className="py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/3 space-y-2">
              <div className="sticky top-8">
                <PageHeader 
                  title="Choose Your Skip Size" 
                  description="Select the skip size that best suits your needs"
                />

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {features.map((feature, index) => (
                    <Card 
                      key={index} 
                      className="p-6 border-none bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group"
                    >
                      <feature.icon className="size-8 text-blue-500" />
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-slate-300">{feature.description}</p>
                    </Card>
                  ))}
                </div>

                <StepsHeader 
                  steps={steps} 
                  currentStep={currentStep} 
                  className="hidden lg:block mt-8"
                />
              </div>
            </div>

            <div className="lg:w-2/3">
              <StepsHeader 
                steps={steps} 
                currentStep={currentStep} 
                className="lg:hidden mb-8"
              />
              <SkipGrid />
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}