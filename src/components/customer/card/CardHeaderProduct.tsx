import React from 'react';

interface CardHeaderProductProps {
  title: string;
}

const CardHeaderProduct: React.FC<CardHeaderProductProps> = ({ title }) => {
  return (
    <div className='flex items-center gap-x-4'>
      <div className='bg-[#4ADE80] w-8 h-20 rounded-r-lg border border-lg'></div>
      <h1 className='text-3xl text-[#4ADE80]'>{title}</h1>
    </div>
  );
};

export default CardHeaderProduct;
