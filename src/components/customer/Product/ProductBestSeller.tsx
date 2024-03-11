import React from 'react'
import CardHeaderProduct from '../card/CardHeaderProduct'
import CardProduct from '../card/CardProduct';

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

const ProductBestSeller = () => {
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
    ];

    return (
        <div className='py-4 mt-8'>
            <CardHeaderProduct title='Bulan ini' />
            <h3 className='text-2xl mt-4 text-secondary'>Produk paling banyak di jual</h3>
            <div className="grid py-4 grid-cols-12 gap-6">
                {products.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductBestSeller