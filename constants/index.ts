import { MapPin, Trash2, CreditCard, Truck, Shield, Calendar } from "lucide-react";


export const steps = [
    { id: 1, name: "Postcode", completed: true, icon: MapPin },
    { id: 2, name: "Waste Type", completed: true, icon: Trash2 },
    { id: 3, name: "Select Skip", completed: false, current: true, icon: Truck },
    { id: 4, name: "Permit Check", completed: false, icon: Shield },
    { id: 5, name: "Choose Date", completed: false, icon: Calendar },
    { id: 6, name: "Payment", completed: false, icon: CreditCard },
  ];