export interface FoodCart {
    cartId: number;
    userId: number;
    items: CartItem[];
  }
   
  export interface CartItem {
    cartItemId: number;
    itemId: number;
    itemName: string;
    category: Category;
    quantity: number;
    cost: number;
    restaurantId: number;
  }
  export interface Category {
    categoryId: number;
    categoryName: string;
  }