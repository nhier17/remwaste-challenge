import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// calculate total price 
export const totalPrice = (priceBeforeVat: number, vat: number) => {
    return priceBeforeVat + (priceBeforeVat * vat / 100);
}
    
