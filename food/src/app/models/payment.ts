export interface OrderRequest {
    customerName: string;
    email: string;
    phoneNumber: string;
    amount: number;
    razorpayOrderId?: string; 
    userId?: number; 
    paymentId?: number; 
  }
  