import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our about page!</p>
            <Link  href={"/About/Contact"} >
                Contact 
            </Link>
        </div>
    );
};

export default About;