'use client'
import 'tailwindcss/tailwind.css'
import Appbar from '../../src/app/componentes/Appbar';
import Bottom from '../../src/app/componentes/Bottom';
import Drawer from '../../src/app/componentes/Drawer';
import React, {useContext, useEffect, useState} from 'react';
import { ProductContainer, ProductImage, CardButton } from '../../src/styles/productsStyles/ProductsStyles'

const PaymentPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
        Página de pagamento
      <Bottom></Bottom>
    </main>
  );

}
export default PaymentPage;