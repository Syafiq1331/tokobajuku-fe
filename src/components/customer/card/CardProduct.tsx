import Image from 'next/image';
import React from 'react';
import { HiOutlineHeart, HiOutlineInformationCircle } from 'react-icons/hi';

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

interface CardProductProps {
    product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg lg:col-span-3 col-span-12 relative">
            <div className="flex justify-between items-center p-4 absolute right-0">
                <div className="flex justify-end flex-col relative">
                    <button className="flex items-center text-gray-500 border border-white bg-white rounded-full p-1 mb-1">
                        <HiOutlineInformationCircle className="text-2xl text-black" />
                    </button>
                    <button className="flex items-center text-gray-500 border border-white bg-white rounded-full p-1">
                        <HiOutlineHeart className="text-2xl text-black" />
                    </button>
                </div>
            </div>
            <div className=' p-4 bg-secondary/10'>
                <img className="w-4/5 mx-auto" src={product.imgSrc} alt={product.imgAlt} />
            </div>
            <div className="px-6 py-4">
                <div className="text-xl mb-2">{product.title}</div>
                <div className="flex flex-wrap lg:flex-nowrap gap-x-4 mt-2">
                    <p className="text-primary text-lg">{`Rp. ${product.discount}`}</p>
                    <p className="text-secondary/60 text-lg line-through line-through/20">{`Rp. ${product.price}`}</p>
                </div>
                <p className="text-gray-700 flex-wrap lg:flex-nowrap flex gap-x-2 items-center text-base my-3">
                    <span className="text-yellow-500 flex gap-x-2">
                        {[...Array(product.rating)].map((_, index) => (
                            <Image key={index} src="/icons/star.svg" alt="star" width={15} height={15} />
                        ))}
                    </span>
                    <span className='pt-1'>( {product.reviewers} )</span>
                </p>
            </div>
        </div>
    );
}

export default CardProduct;
