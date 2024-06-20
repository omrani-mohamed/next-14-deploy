import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import styles from '@/app/login/ui/login.module.css';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import AcmeLogo from '../ui/acme-logo';

export default function Loginpage (){
    return(
        <div className ={styles.container}>
            <form className={styles.form}>
                <h1>Please log in to continue.</h1>
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                <div className="w-32 text-white md:w-36">
                    <AcmeLogo />
                </div>
                </div>
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Password' required/>
                <button type= "submit"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                <ArrowRightIcon className="w-5 md:w-6" />Log in</button>
            </form>
        </div>
);}
