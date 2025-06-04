import React from "react";
import { cn } from "@/lib/utils";

type Steps = {
  id: number;
  name: string;
  completed: boolean;
  icon: React.ComponentType<{ className?: string }>;
  current?: boolean;
};

interface StepsHeaderProps {
  steps: Steps[];
  currentStep: number;
  className?: string;
}

export function StepsHeader({ steps, currentStep, className }: StepsHeaderProps) {
  return (
    <nav
      className={cn(
        "w-full border-b bg-inherit px-4 py-3",
        className
      )}
    >
      <ul className="flex items-center justify-start gap-3 max-w-6xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-thumb-rounded-full">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = step.completed;
          const isCurrent = step.current;

          return (
            <li
              key={step.id}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors duration-300",
                isCompleted
                  ? "bg-green-100 text-green-700"
                  : isCurrent
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-500 hover:bg-gray-100"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{step.name}</span>
              {index < steps.length - 1 && (
                <span className="ml-3 hidden sm:inline-block text-gray-300">→</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
