import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#333333] text-white'>
            <div className='px-12 py-6 grid grid-cols-12 w-full'>
                <div className="lg:col-span-3 col-span-12 my-2">
                    <h2 className='text-lg font-[500]'>Product</h2>
                    <div className="flex flex-col">
                        <Link href='/customer/product' className='text-white/70'>Baju kaos anak laki-laki</Link>
                        <Link href='/customer/product' className='text-white/70'>Baju kaos anak perempuan</Link>
                        <Link href='/customer/product' className='text-white/70'>Baju kaos anak distro</Link>
                        <Link href='/customer/product' className='text-white/70'>Baju kaos anak denim</Link>
                    </div>
                    <br />
                    <br />
                    <h2 className='text-lg font-[500]'>Marketplace</h2>
                    <div className="flex gap-x-3 mt-2">
                        <Image src='/icons/footer/facebook.svg' width={25} height={25} alt='product' />
                        <Image src='/icons/footer/instagram.svg' width={25} height={25} alt='product' />
                        <Image src='/icons/footer/tiktok.svg' width={25} height={25} alt='product' />
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12 my-2">
                    <h2 className='text-lg font-[500]'>Perusahaan</h2>
                    <div className="flex flex-col">
                        <Link href='/customer/product' className='text-white/70'>Profile Perusahaan</Link>
                        <Link href='/customer/product' className='text-white/70'>Sejarah Perusahaan</Link>
                    </div>
                    <br />
                    <br />
                    <h2 className='text-lg font-[500]'>Sosial Media</h2>
                    <div className="flex gap-x-3 mt-2">
                        <Image src='/icons/footer/lazada.svg' width={25} height={25} alt='product' />
                        <Image src='/icons/footer/tokopedia.svg' width={25} height={25} alt='product' />
                        <Image src='/icons/footer/shopee.svg' width={25} height={25} alt='product' />
                    </div>
                </div>
                <div className="lg:col-span-6 col-span-12 my-2">
                    <div className='flex mb-2'>
                        <Image src='/icons/footer/tokopedia.svg' width={40} height={40} alt='product' className='mr-2' />
                        <h4 className='text-xl'>Warehouse Baju <br /> Anak Bandung</h4>
                    </div>
                    <p>Warehouse Baju Anak Bandung adalah perusahaan yang berdedikasi untuk memberikan solusi gaya berpakaian anak-anak yang trendy dan berkualitas tinggi. Berlokasi strategis di Bandung, kami memiliki gudang yang luas dan menyediakan berbagai koleksi pakaian anak-anak yang dirancang untuk kenyamanan dan gaya. Dari busana sehari-hari hingga pilihan pesta, kami menawarkan variasi produk yang bervariasi, dijamin memenuhi selera dan kebutuhan beragam pelanggan kami. Dengan komitmen untuk memberikan layanan terbaik, Warehouse Baju Anak Bandung hadir untuk menjadi destinasi favorit dalam memenuhi kebutuhan fashion anak-anak yang modern dan berkelas.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer