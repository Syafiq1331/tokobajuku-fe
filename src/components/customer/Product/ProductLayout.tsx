import React from 'react'
import CardHeaderProduct from '../card/CardHeaderProduct';
import CardProduct from '../card/CardProduct';

interface Product {
    id: number;
    imgAlt: string;
    imgSrc: string;
    title: string;
    rating: number;
    price: number;
}

const ProductLayout = () => {
    const products: Product[] = [
        {
            id: 1,
            imgAlt: 'Product 1',
            imgSrc: '/images/products/product1.png',
            title: 'Product 1 Title',
            rating: 4,
            price: 99.99
        },
        {
            id: 2,
            imgAlt: 'Product 2',
            imgSrc: '/images/products/product2.png',
            title: 'Product 2 Title',
            rating: 5,
            price: 149.99
        },
        {
            id: 1,
            imgAlt: 'Product 1',
            imgSrc: '/images/products/product1.png',
            title: 'Product 1 Title',
            rating: 4,
            price: 99.99
        },
        {
            id: 2,
            imgAlt: 'Product 2',
            imgSrc: '/images/products/product2.png',
            title: 'Product 2 Title',
            rating: 5,
            price: 149.99
        },
        {
        id: 1,
        imgAlt: 'Product 1',
        imgSrc: '/images/products/product1.png',
        title: 'Product 1 Title',
        rating: 4,
        price: 99.99
    },
    {
        id: 2,
        imgAlt: 'Product 2',
        imgSrc: '/images/products/product2.png',
        title: 'Product 2 Title',
        rating: 5,
        price: 149.99
    },
        // Add more products as needed
    ];

  return (
    <div className='py-4'>
    <CardHeaderProduct />
    <div className="grid py-4 grid-cols-12 gap-6">
    {products.map(product => (
            <CardProduct key={product.id} product={product} />
        ))}
    </div>
    </div>
  )
}

export default ProductLayout