import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='text-center flex flex-col justify-center items-center h-screen mx-12'>
            <Image
                src="/auth/404.svg"
                alt=""
                width={500}
                height={500}
                className='mb-4'
            />
            <p>Halaman yang kamu minta tidak ada ...</p>
            <p>Kembali ke
                <Link href={'/'} className='text-primary ml-1'>
                    halaman utama
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
