import React from 'react';
import { Card } from 'flowbite-react';

interface Product {
    id: number;
    imgAlt: string;
    imgSrc: string;
    title: string;
    rating: number;
    price: number;
}

interface CardProductProps {
    product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
    return (
        <Card
            className="max-w-sm lg:col-span-3 col-span-6"
            imgAlt={product.imgAlt}
            imgSrc={product.imgSrc}
        >
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                </h5>
            </a>
            <div className="mb-5 mt-2.5 flex items-center">
                {/* Rendering rating stars */}
                {Array.from({ length: product.rating }).map((_, index) => (
                    <svg
                        key={index}
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Star SVG path */}
                    </svg>
                ))}
                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    {product.rating}
                </span>
            </div>
            <div className="flex flex-wrap items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                </span>
                <a
                    href="#"
                    className="rounded-lg mt-4 bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    );
}

export default CardProduct;
