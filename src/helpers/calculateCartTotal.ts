interface CartItem {
  id: string;
  name: string;
  details?: string;
  image: string;
  priceUsd: number;
  quantity: number;
}

export default function calculateCartTotal(cart: CartItem[]): number {
  return cart.reduce((total, next) => {
    return total + next.quantity * next.priceUsd;
  }, 0);
}
