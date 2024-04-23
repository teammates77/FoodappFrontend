

export interface OrderItemDTO {
    itemId: number;
    itemName: string;
    quantity: number;
    cost: number;
    userId: number;
    restaurantId: number;
    deliveryStatus: string;
}

export interface AddOrderDetailsDTO {
    timeSpan: Date; 
    cartId: number;
    status: string;
    items: OrderItemDTO[];
    addressId: number;
    razorpayOrderId: string;
}
export class UserOrdersDTO {
    itemId: number;
    itemName: string;
    quantity: number;
    cost: number;
    status: string;
    deliveryStatus: string;
    orderId: number;
    userid: number;
    paymentId: string;
    orderItemId:number;
  }