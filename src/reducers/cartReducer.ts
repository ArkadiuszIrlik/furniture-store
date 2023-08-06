export enum CartActionKind {
  ADDED = 'added',
  CHANGED_QUANTITY = 'changedQuantity',
  REMOVED = 'removed',
}

export interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

export interface CartAction {
  type: CartActionKind;
  item?: CartItem;
  nextQuantity?: number;
  itemId?: string;
}

export default function cartReducer(
  cart: CartItem[],
  action: CartAction
): CartItem[] {
  switch (action.type) {
    case CartActionKind.ADDED: {
      if (action.item !== undefined) {
        if (cart.find((item) => item.id === action.item?.id)) {
          return cart.map((item) => {
            if (item.id === action.item?.id) {
              return {
                ...item,
                quantity: item.quantity + action.item.quantity,
              };
            }
            return item;
          });
        }
        return [...cart, action.item];
      } else {
        throw Error('Invalid payload');
      }
    }
    case CartActionKind.CHANGED_QUANTITY: {
      if (action.nextQuantity !== undefined) {
        if (action.nextQuantity < 1 || action.nextQuantity > 99) {
          return cart;
        }
        return cart.map((item) => {
          if (item.id === action.itemId) {
            if (action.nextQuantity !== undefined) {
              return { ...item, quantity: action.nextQuantity };
            }
          }
          return item;
        });
      } else {
        throw Error('Invalid payload');
      }
    }
    case CartActionKind.REMOVED: {
      return cart.filter((item) => item.id !== action.itemId);
    }
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}
