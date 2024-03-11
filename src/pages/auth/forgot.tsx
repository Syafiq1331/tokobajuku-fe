import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';

const ForgotPassword = () => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap h-screen gap-x-32 items-center">
      <div className='w-full lg:p-24 p-6 bg-backgroundLogin'>
        <Image
          src="/auth/forgotPassword.svg"
          alt=""
          width={20}
          height={20}
          layout="responsive"
          sizes="(max-width: 640px) 200px, 500px"
        />
      </div>
      <div className='w-full lg:mx-0 mx-12 mt-12 lg:mt-0'>
        <h3 className="text-medium text-2xl">Lupa Password</h3>
        <p className='mt-1'>Masukkan email untuk mengirimkan reset password</p>

        <div className='lg:mr-44 mt-4'>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email anda" />
              </div>
              <TextInput id="email" type="email" placeholder="agus@gmail.com" required />
            </div>
            <Button className='bg-primary/80  enabled:hover:bg-primary focus:ring-4 focus:ring-primary dark:bg-primary dark:enabled:hover:bg-primary dark:focus:ring-primary dark:border-primary' type="submit">Kirim email</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
