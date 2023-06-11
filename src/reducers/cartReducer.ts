interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

export default function cartReducer(
  cart: CartItem[],
  action: {
    type: string;
    item?: CartItem;
    nextQuantity?: number;
    itemId?: string;
  }
) {
  switch (action.type) {
    case 'added': {
      if (cart.find((item) => item.id === action.item.id)) {
        return cart.map((item) => {
          if (item.id === action.item.id) {
            return {
              ...item,
              quantity: item.quantity + action.item?.quantity,
            };
          }
          return item;
        });
      }
      return [...cart, action.item];
    }
    case 'changedQuantity': {
      if (action.nextQuantity < 1 || action.nextQuantity > 99) {
        return cart;
      }
      return cart.map((item) => {
        if (item.id === action.itemId) {
          return { ...item, quantity: action.nextQuantity };
        }
        return item;
      });
    }
    case 'removed': {
      return cart.filter((item) => item.id !== action.itemId);
    }
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}
