import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section>
            <div>
                <div>
                    <h1 className='font-mono text-xl text-center md:text-3xl'>Contact Us, Our Office Address Down Below</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <Link to={`/bd-office`} className='bg-cyan-600 py-1 px-3 rounded text-white mt-3 mx-2 w-auto sm:mb-0'>BD Office
                    </Link>
                    <Link to={`/us-office`} className='bg-cyan-600 py-1 px-3 rounded text-white mt-3 mx-2 w-auto sm:mb-0'>US Office
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;