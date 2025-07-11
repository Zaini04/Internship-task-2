import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
 

const addToCart = (product) => {
  setProducts((prev) => {
    const existing = prev.find((p) => p.id === product.id);

    if (existing) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Number(item.quantity + (product.quantity || 1) )}
          : item
      );
    } else {
      return [...prev, { ...product, quantity: Number(product.quantity || 1 )}];
    }
  });

  toast.success("Added to cart");
};



  const removeFromCart = (productId) => {
    setProducts((prev) => prev.filter((item) => item.id !== productId));
    toast.error('Removed from cart')
  };

  const increase = (id) => {
      console.log("Increasing quantity for:", id);

  setProducts((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: Number(item.quantity + 1 )} : item
    )
  );
};

const decrease = (id) => {
    console.log("Decreasing quantity for:", id);

  setProducts((prev) =>
    prev.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item,quantity:  Number(item.quantity - 1 )}
        : item
    )
  );
};

// Inside CartContext value
const value = {
  products,
  addToCart,
  removeFromCart,
  increase,
  decrease,
  setProducts,
  
};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
