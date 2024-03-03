import CardFlat from '@/components/Card/CardFlat'
import CardWithTitle from '@/components/Card/CardWithTitle'
import Image from 'next/image'
import React, { useState } from 'react';
import { HiOutlineStar } from "react-icons/hi";

const BestSellerProduct = () => {

  const DummyData = [
    { id: 1, name: 'Kaos Minion Anak', imageSrc: '/sampleKaos.png', sold: 100, rating: 5 },
    { id: 2, name: 'Kemeja Polos Dewasa', imageSrc: '/sampleKaos.png', sold: 80, rating: 4 },
    { id: 3, name: 'Topi Baseball Anak', imageSrc: '/sampleKaos.png', sold: 120, rating: 5 },
    { id: 4, name: 'Sepatu Sneakers Anak', imageSrc: '/sampleKaos.png', sold: 90, rating: 4 },
    { id: 5, name: 'Celana Jeans Dewasa', imageSrc: '/sampleKaos.png', sold: 70, rating: 3 },
  ];

  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (direction: any) => {
    const container = document.getElementById('cardContainer');
    if (container) {
      const scrollStep = 100;
      const scrollWidth = direction === 'right' ? scrollStep : -scrollStep;
      container.scrollBy({ left: scrollWidth, behavior: 'smooth' });
      setScrollX(scrollX + scrollWidth);
    } else {
      console.warn("Container not found!");
    }
  };


  return (
    <CardWithTitle className='my-5 lg:col-span-6 col-span-12 shadow-lg' title="Product best sellers">
      <div className='relative overflow-hidden'>
        <button className="absolute top-1/2 transform -translate-y-1/2 left-2  text-forty py-2 px-4 rounded-lg" onClick={() => handleScroll('left')}>
          <span className='text-3xl'>&lt;</span>
        </button>
        <div id="cardContainer" className='flex gap-x-2 overflow-x-auto'>
          {DummyData.map(item => (
            <CardFlat key={item.id} className='text-center'>
              <Image
                src={item.imageSrc}
                alt="product"
                width={100}
                height={100}
                className='mx-auto'
              />
              <h3 className='text-secondary text-sm font-medium'>{item.name}</h3>
              <div className='flex gap-x-2 justify-center'>
                {[...Array(item.rating)].map((_, index) => (
                  <HiOutlineStar key={index} className='text-yellow-300' />
                ))}
              </div>
              <p className='text-secondary/60 my-1 text-sm'>{item.sold}rb terjual</p>
              <button className="bg-forty text-white py-2 px-4 rounded-lg">
                <p className='text-sm'>Detail</p>
              </button>
            </CardFlat>
          ))}
        </div>
        <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-forty py-2 px-4 rounded-lg" onClick={() => handleScroll('right')}>
          <span className='text-3xl'>&gt;</span>
        </button>
      </div>
    </CardWithTitle>
  )
}

export default BestSellerProduct