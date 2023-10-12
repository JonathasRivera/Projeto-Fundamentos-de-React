import 'tailwindcss/tailwind.css'
import Appbar from '@/app/componentes/Appbar';
import Bottom from '@/app/componentes/Bottom';
import Drawer from '@/app/componentes/Drawer';
import React, {useContext, useState} from 'react';
import { CartContext } from '@/app/contexts/cartContext/CartContext';
import { ProductContainer, ProductImage, CardButton } from '@/styles/productsStyles/ProductsStyles'

const CartPage = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <main className="bg-gradient-to-r from-yellow-500 to-red-500">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
        <ul className='font-bold text-black py-2 px-3 rounded'>
          {cartItems.map((item) => (
            <li key={item.id}>
              <ProductContainer>
              <ProductImage src={item.image}/>
                <p>{item.title}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <CardButton className='h-12 bg-gradient-to-r from-yellow-500 to-red-500 font-bold text-white py-2 px-3 rounded' onClick={() => removeFromCart(item.id)}>Remove from Cart</CardButton>
              </ProductContainer>
            </li>
          ))}
        </ul>

      <Bottom></Bottom>
    </main>
  );

}
export default CartPage;