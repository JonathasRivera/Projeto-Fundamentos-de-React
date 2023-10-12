import React, {useContext, useEffect} from 'react';
import { ThemeContext } from '../contexts/theme/ThemeContext';
import Image from 'next/image'
import Link from 'next/link';

function Appbar({onMenuToggle}) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('atualiza appbar')
  }, [theme]);
  
  return (
    <div className={`h-12 bg-gradient-to-r from-yellow-500 to-red-500 font-bold text-white py-2 px-3 rounded
      ${theme === 'dark' ? 'bg-transparent-800' : 'bg-transparent-200'}`}>
      <div className={`
      ${theme === 'dark' ? 'text-white' : 'text-black'}`}>  
      </div>
      <button onClick={onMenuToggle}>
        <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
  )
}

export default Appbar;