'use client'
import 'tailwindcss/tailwind.css'
import Appbar from '@/app/componentes/Appbar';
import Bottom from '@/app/componentes/Bottom';
import Drawer from '@/app/componentes/Drawer';
import React, {useContext, useEffect, useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { fetchProducts } from '@/app/utils/api';
import { CartContext } from '@/app/contexts/cartContext/CartContext';
import { ProductContainer, ProductImage, CardButton } from '@/styles/productsStyles/ProductsStyles'

const ProductsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const {addToCart} = useContext(CartContext);

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession();
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        const productsData = await fetchProducts();
        setProducts(productsData);
    }
    getProducts();
  }, []);

  
  return (
    <main className="bg-gradient-to-r from-yellow-500 to-red-500">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <ul className='font-bold text-black py-2 px-3 rounded'>
        {products.map((product) =>(
            <li key={product.id}>
              <ProductContainer>
                <ProductImage src={product.image} width={200} />
                <p>{product.title}</p>
                <p>{product.price}</p> 
                <p>{product.description}</p>
                <p>{product.category} </p>
                <CardButton 
                 className='h-12 bg-gradient-to-r from-yellow-500 to-red-500 font-bold text-white py-2 px-3 rounded' onClick={() => addToCart(product)}
                >
                  Add cart
                </CardButton>
              </ProductContainer>
            </li>
        ))}
      </ul>
      <Bottom></Bottom>
    </main>
  );

}
export default ProductsPage;