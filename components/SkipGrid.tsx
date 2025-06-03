"use client";

import { useState, useEffect } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { SkipCard } from "./SkipCard";
import { SkipData } from "@/types";

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

export function SkipGrid() {
    const [skipOptions, setSkipOptions] = useState<SkipData[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string>("all");

    useEffect(() => {
        const fetchSkipOptions = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            setSkipOptions(data);
        }
        fetchSkipOptions();
    }, []);

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
  <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold mb-4 sm:mb-0">Available Skip Sizes</h2>
        <div className="w-full sm:w-auto">
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkips.map((skip) => (
            <SkipCard key={skip.id} {...skip} />
        ))}
      </div>
    </div>
    )
}