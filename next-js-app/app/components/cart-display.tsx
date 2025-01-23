import { useCart } from "../contexts/cart-context";
import { Button } from "@/app/components/ui/button";

export function CartDisplay() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <span>
                {item.name} (x{item.quantity})
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t">
            <p className="font-semibold">Total: ${total.toFixed(2)}</p>
          </div>
          <Button onClick={clearCart} className="mt-4 w-full">
            Clear Cart
          </Button>
        </>
      )}
    </div>
  );
}
