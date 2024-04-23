export interface ItemsInRestaurantOrderDTO {
    itemId: number;
    itemName: string;
    quantity: number;
    cost: number;
    restaurantId: number;
    itemimageUrl:string;
    deliveryStatus:string;
    address:Address;
    orderItemId:number;
  }
 
interface Address {   
  addressId: number;   
  buildingName: string;   
  streetName: string;  
   area: string;   
   city: string;   
   state: string;   
   country: string;   
   pinCode: number; }