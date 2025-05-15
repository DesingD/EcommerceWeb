export interface Orders {
    id: string;
    customer_id: string;
    address_id: string;
    status: string;
    total_amount: number;
    created_at: Date;
}