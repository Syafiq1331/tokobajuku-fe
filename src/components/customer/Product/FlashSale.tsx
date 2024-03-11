import React from 'react'
import CardHeaderProduct from '../card/CardHeaderProduct';
import CardProduct from '../card/CardProduct';
import Link from 'next/link';

interface Product {
    id: number;
    imgAlt: string;
    imgSrc: string;
    title: string;
    rating: number;
    price: number;
    discount?: number;
    reviewers?: number;
}

const FlashSale = () => {
    const products: Product[] = [
        {
            id: 1,
            imgAlt: 'Product 1',
            imgSrc: '/customer/product/01.png',
            title: 'Kaos Minion Anak',
            rating: 4,
            price: 99.99,
            discount: 35000,
            reviewers: 20,
        },
        {
            id: 2,
            imgAlt: 'Product 2',
            imgSrc: '/customer/product/01.png',
            title: 'Kaos Distro Anak',
            rating: 5,
            price: 149.99,
            discount: 35000,
            reviewers: 20,
        },
        {
            id: 1,
            imgAlt: 'Product 1',
            imgSrc: '/customer/product/01.png',
            title: 'Kaos Minion Anak',
            rating: 4,
            price: 99.99,
            discount: 35000,
            reviewers: 20,
        },
        {
            id: 2,
            imgAlt: 'Product 2',
            imgSrc: '/customer/product/01.png',
            title: 'Kaos Distro Anak',
            rating: 5,
            price: 149.99,
            discount: 35000,
            reviewers: 20,
        },
        // Add more products as needed
    ];

    return (
        <div className='py-4'>
            <CardHeaderProduct title='Flash Sale' />
            <div className="grid py-4 grid-cols-12 gap-6">
                {products.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
            <div className='flex justify-center my-4'>
                <Link className='text-center px-4 py-2 bg-primary text-white rounded-md' href='/customer/product'>
                    Lihat semua produk
                </Link>
            </div>
        </div>
    )
}

export default FlashSale;