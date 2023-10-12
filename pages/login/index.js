'use client'
import Appbar from '../../src/app/componentes/Appbar';
import Bottom from '../../src/app/componentes/Bottom';
import Drawer from '../../src/app/componentes/Drawer';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';
import './style.css'

const LoginPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);


  if (session) {
    return (
      <main className="min-h-screen">
        <Appbar onMenuToggle={handleMenuToggle}></Appbar>
        <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
          <div className='container'>
            <h2>
              {" "}
              <b>Logado como: </b>{session.user.name}, e-mail: {session.user.email} <br />
            </h2>
            <div className='button'>
              <button
                className='h-12 bg-gradient-to-r from-yellow-500 to-red-700 text-white font-bold py-2 px-4 rounded mx-2 mt-2'
                onClick={() => router.push("/profile/complete-profile")}
                >
                Complete your profile
              </button>
              <button
                className='h-12 bg-gradient-to-r from-yellow-500 to-red-700 text-white font-bold py-2 px-4 rounded mx-2'
                onClick={() => {
                  signOut();
                }}
                >
                Sign out
              </button>
            </div>
          </div>  
        <Bottom></Bottom>
      </main>
    );
  }
  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <h2> You are not signed in!!</h2>
        <button className='h-12 bg-gradient-to-r from-yellow-500 to-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => signIn()}>
          Sign in
        </button>
      <Bottom></Bottom>
    </main>
  );






}
export default LoginPage;