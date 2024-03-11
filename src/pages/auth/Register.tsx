import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';

const Register = () => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap h-screen gap-x-32 items-center">
      <div className='w-full lg:p-12 p-6 bg-backgroundLogin'>
        <Image
          src="/auth/register.svg"
          alt=""
          width={100}
          height={100}
          layout="responsive"
          sizes="(max-width: 640px) 200px, 500px"
        />
      </div>
      <div className='w-full lg:mx-0 mx-12 mt-12 lg:mt-0'>
        <h3 className="text-medium text-2xl">Buat akun baru</h3>
        <p className='mt-1'>Isi data di bawah dengan benar</p>

        <div className='lg:mr-44 mt-4'>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nama" value="Nama" />
              </div>
              <TextInput id="nama" type="text" placeholder="Agus Saepulloh" required className='w-full' />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email anda" />
              </div>
              <TextInput id="email" type="email" placeholder="agus@gmail.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password anda" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <Button className='bg-primary/80  enabled:hover:bg-primary focus:ring-4 focus:ring-primary dark:bg-primary dark:enabled:hover:bg-primary dark:focus:ring-primary dark:border-primary' type="submit">Submit</Button>
          </form>
          <p className='text-center mt-14 text-sm'>
            Sudah punya akun ?
            <a href="login" className='ml-1'>
              <span className='font-[600]'>Login</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
