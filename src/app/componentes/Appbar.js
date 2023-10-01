import Image from 'next/image'
import Link from 'next/link';

function Appbar({onMenuToggle}) {
  return (
    <div>
      <button onClick={onMenuToggle}>
        <svg className="w-6 h-6 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
  )
}

export default Appbar;