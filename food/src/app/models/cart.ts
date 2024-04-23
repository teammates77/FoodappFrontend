export interface FoodCart {
    categoryName: string;
    itemId: number;
    itemName: string;
    category: {
        categoryId: number;
        categoryName: string;
      };
    quantity: number;
    cost: number;
    userId: number;
    itemsInCart: CartItem[];
    totalCost: number;
}

  export interface CartItem {
    cartItemId: number;
    itemId: number;
    itemName: string;
    quantity: number;
    cost: number;
  }