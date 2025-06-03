"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronRight, Weight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
 }: SkipData) {
    const [isHovered, setIsHovered] = useState(false);

    const price = totalPrice(price_before_vat, vat);

    return (
        <Card 
        className={cn(
          "overflow-hidden transition-all duration-300 hover:shadow-lg border-2",
          isHovered ? "border-primary" : "border-border",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="p-0 relative h-[200px] overflow-hidden bg-muted">
          <Image
            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
            alt="Skip Image"
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            fill
          />
          {badge && (
            <Badge className="absolute top-3 right-3 bg-primary text-white font-medium">
              {badge}
            </Badge>
          )}
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">{size} Yard Skip</h3>
              <p className="text-2xl font-bold text-primary">£{price_before_vat}</p>
            </div>
            <p className="text-muted-foreground">{hire_period_days} days</p>
            
            <div className="flex flex-col gap-2 mt-4">
              {allowed_on_road === false && (
                <div className="flex items-center text-amber-600 bg-amber-50 px-3 py-2 rounded-md">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <p className="text-sm">Not Allowed On The Road</p>
                </div>
              )}
              {allows_heavy_waste && (
                <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-2 rounded-md">
                  <Weight className="h-4 w-4 mr-2" />
                  <p className="text-sm">Suitable for Heavy Waste</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="w-full group" 
                >
                  <span>Select This Skip</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Select this {size} yard skip for £{price}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    )
}