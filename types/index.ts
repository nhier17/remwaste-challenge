export type SkipData = {
    id: number;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
    hire_period_days: number;
    price_before_vat: number;
    size: number;
    vat: number;
    badge?: string;
    className?: string;
}