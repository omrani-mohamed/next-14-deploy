import styles from '@/app/login/ui/login.module.css';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Loginpage (){
    
    return(
        <div className ={styles.container}>
            <form className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                {/* <button type= "submit" 
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                <ArrowRightIcon className="w-5 md:w-6" />Log in</button> */}
                <Link
                href="/dashboard"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
            </form>
        </div>
    );
}