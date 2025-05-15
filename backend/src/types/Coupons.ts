export interface Coupons {
    id: string;
    code: string;
    discount_type: string;
    discount_value: number;
    expiration: Date;
    usage_limit: number;
}