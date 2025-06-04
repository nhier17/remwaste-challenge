"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlertCircle, Weight, Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkipData } from "@/types";
import { totalPrice } from "@/lib/utils";

export function SkipCard({
    allowed_on_road,
    allows_heavy_waste,
    hire_period_days,
    price_before_vat,
    vat,
    size,
    badge,
    className,
    isSelected,
    onSelect,
 }: SkipData) {
    const [isHovered, setIsHovered] = useState(false);

    const price = totalPrice(price_before_vat, vat);

    return (
        <Card 
        className={cn(
          "group overflow-hidden transition-all duration-300",
          isSelected 
            ? "ring-2 ring-primary ring-offset-4 ring-offset-slate-900" 
            : "hover:ring-1 hover:ring-white/20",
          "bg-white/10 backdrop-blur-sm border-none",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col sm:flex-row gap-6 p-6">
          <div className="relative w-full sm:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
              alt="Skip Image"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              fill
            />
            <div className="absolute top-4 right-4 z-20">
              {badge && (
                <Badge className="bg-primary text-white font-medium">
                  {badge}
                </Badge>
              )}
            </div>
          </div>
  
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{size} Yard Skip</h3>
                <p className="text-slate-300 text-sm">{hire_period_days} days</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-white">£{price}</p>
                {isSelected && (
                  <Badge variant="outline" className="mt-2 border-primary/50 text-primary">
                    Selected
                  </Badge>
                )}
              </div>
            </div>
  
            <div className="flex flex-wrap gap-3 mb-6">
              {allowed_on_road === false && (
                <div className="flex items-center bg-amber-500/10 text-amber-300 px-3 py-1.5 rounded-full text-sm">
                  <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Not Allowed On Road</span>
                </div>
              )}
              {allows_heavy_waste && (
                <div className="flex items-center bg-emerald-500/10 text-emerald-300 px-3 py-1.5 rounded-full text-sm">
                  <Weight className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Heavy Waste Suitable</span>
                </div>
              )}
            </div>
  
            <div className="mt-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>  
                    <Button 
                      className={cn(
                        "w-full",
                        isSelected 
                          ? "bg-primary/90 hover:bg-primary/80" 
                          : "bg-white/10 hover:bg-white/20 text-white"
                      )}
                      onClick={onSelect}
                    >
                      {isSelected ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          <span>Skip Selected</span>
                        </>
                      ) : (
                        <>
                          <span>Select This Skip</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isSelected ? 'This skip is selected' : `Select this ${size} yard skip for £${price}`}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </Card>
    )
}