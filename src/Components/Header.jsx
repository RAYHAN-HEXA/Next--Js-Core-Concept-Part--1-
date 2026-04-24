import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
           <header className="px-4 py-3 border-b-3 border-gray-50 flex justify-between items-center   " >
          <Link href="/">
            <h1 className="text-xl font-bold" >
              Dev-Story 👨‍💻
            </h1>
          </Link>
          <nav className='space-x-5' >
            <Link href="/About">About</Link>
             <Link href="/login">login</Link>
              <Link href="/Register">Register</Link>
               <Link href="/Tutorials">Tutorials</Link>
                
        </nav>
        </header> 
        </div>
    );
};

export default Header;