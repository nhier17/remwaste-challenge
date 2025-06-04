import React from "react";
import { cn } from "@/lib/utils";

type Steps = {
    id: number;
    name: string;
    completed: boolean;
    icon: React.ComponentType<{ className?: string }>;
    current?: boolean;
}

interface StepsHeaderProps {
    steps: Steps[];
    currentStep: number;
    className?: string;
}

export function StepsHeader({ steps, currentStep, className }: StepsHeaderProps) {
  return (
    <section className={cn("w-full bg-white shadow-sm py-4 px-6 border-b", className)}>
<div className="flex items-center justify-between max-w-6xl mx-auto overflow-x-auto">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-full text-xs transition-all",
                step.completed && "bg-green-100 text-green-700",
                step.current && !step.completed && "bg-blue-100 text-blue-700 font-semibold",
                !step.completed && !step.current && "text-gray-500"
              )}
            >
              <Icon className="size-5" />
              <span className="font-medium">{step.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  )
};