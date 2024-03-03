import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';

const Login = () => {
    return (
        <div className="flex h-screen gap-x-32 items-center">
            <div className='w-full'>
                <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" className='py-24' />
            </div>
            <div className='w-full'>
                <h3 className="text-medium text-2xl">Login ke <strong>Tokobajuku</strong></h3>
                <p>Isi data di bawah dengan benar</p>

                <form className="flex w-full flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required className='w-full' />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
