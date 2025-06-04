"use client";

import { useState, useEffect, Suspense } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SkipCard } from "./SkipCard";
import { SkipData } from "@/types";
import { LoaderSpinner } from "./LoaderSpinner";
import { Filter, ArrowRight } from "lucide-react";
import { totalPrice } from "@/lib/utils";

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

export function SkipGrid() {
    const [skipOptions, setSkipOptions] = useState<SkipData[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string>("all");
    const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null);

    useEffect(() => {
        const fetchSkipOptions = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            setSkipOptions(data);
        }
        fetchSkipOptions();
    }, []);

    const price = totalPrice(selectedSkip?.price_before_vat || 0, selectedSkip?.vat || 0);

    //filter skip options based on selected filter
    const filteredSkips = selectedFilter === "all" 
    ? skipOptions 
    : skipOptions.filter(skip => {
        if (selectedFilter === "road") return !skip.allowed_on_road;
        if (selectedFilter === "heavy") return skip.allows_heavy_waste;
        if (selectedFilter === "small") return skip.size <= 8;
        if (selectedFilter === "medium") return skip.size > 8 && skip.size <= 14;
        if (selectedFilter === "large") return skip.size > 14;
    });
    
    return (
        <div className="space-y-8">
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-none">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold mb-1 text-white">Available Skip Sizes</h2>
              <p className="text-slate-300 text-sm">
                {selectedSkip 
                  ? `Selected: ${selectedSkip.size} Yard Skip - £${price}`
                  : "Select a skip size that suits your needs"}
              </p>
            </div>
            <div className="w-full sm:w-auto flex gap-4">
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-full sm:w-[200px] bg-white/10 border-white/20 text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter skips" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="road">Road Allowed Only</SelectItem>
                  <SelectItem value="heavy">Heavy Waste Suitable</SelectItem>
                  <SelectItem value="small">Small (4-8 Yards)</SelectItem>
                  <SelectItem value="medium">Medium (10-14 Yards)</SelectItem>
                  <SelectItem value="large">Large (16+ Yards)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
  
        <div className="grid grid-cols-1 gap-6">
          {filteredSkips.map((skip) => (
            <Suspense key={skip.id} fallback={<LoaderSpinner />}>
                <SkipCard {...skip} isSelected={skip.id === selectedSkip?.id} onSelect={() => setSelectedSkip(skip)} />
            </Suspense>
          ))}
        </div>
  
        {selectedSkip && (
          <Button size="lg" className="w-full bg-[#007F6E] hover:bg-orange-600 min-h-11 px-6 py-2">
            Continue to Next Step
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    )
}