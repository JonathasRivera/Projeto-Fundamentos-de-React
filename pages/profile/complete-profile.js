import React,{useState} from 'react';
import Appbar from '@/app/componentes/Appbar';
import Bottom from '@/app/componentes/Bottom';
import Drawer from '@/app/componentes/Drawer';
import { useSession } from 'next-auth/react';
import CompleteProfileForm from '@/app/componentes/CompleteProfileForm';
import 'tailwindcss/tailwind.css'

const CompleteProfile = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState();

    const handleMenuToggle  = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const {data: session} = useSession();
    
    return(
        <main className='bg-gradient-to-r from-yellow-500 to-red-500'>
        <Appbar onMenuToggle={handleMenuToggle}></Appbar>
        <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>


        {session? (
            <div>
                <h1 className='text-center font-bold text-2xl'>COMPLETE O CADASTRO</h1>
                <CompleteProfileForm user={session.user}/>
            </div>

        ) : (
            <h1>NÃO LOGADO!</h1>

        )}


        <Bottom></Bottom>
        </main>
    );
}
export default CompleteProfile;