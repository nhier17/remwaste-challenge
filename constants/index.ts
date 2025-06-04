import { 
    Package, 
    MapPin, 
    Trash2, 
    CreditCard, 
    Truck, 
    Shield, 
    Calendar, 
    Scale, 
    Clock 
} from "lucide-react";


export const steps = [
    { id: 1, name: "Postcode", completed: true, icon: MapPin },
    { id: 2, name: "Waste Type", completed: true, icon: Trash2 },
    { id: 3, name: "Select Skip", completed: false, current: true, icon: Truck },
    { id: 4, name: "Permit Check", completed: false, icon: Shield },
    { id: 5, name: "Choose Date", completed: false, icon: Calendar },
    { id: 6, name: "Payment", completed: false, icon: CreditCard },
  ];

  export const features = [
    {
        icon: Package,
        title: "Multiple Sizes",
        description: "From 4 to 40 yard options"
      },
      {
        icon: Truck,
        title: "Fast Delivery",
        description: "Next day delivery available"
      },
      {
        icon: Scale,
        title: "Heavy Waste",
        description: "Suitable options for all waste types"
      },
      {
        icon: Clock,
        title: "Flexible Hire",
        description: "14-day standard hire period"
      }
  ]