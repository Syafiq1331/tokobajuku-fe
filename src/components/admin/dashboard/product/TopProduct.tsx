import CardWithTitle from '@/components/Card/CardWithTitle'
import Image from 'next/image'
import React from 'react';
import { Progress } from 'flowbite-react';

const TopProduct = () => {
  const DummyData = [
    { id: 1, name: 'Kaos Minion Anak', price: 'Rp. 1.000k', sold: 96, progress1: 45, color1: 'purple', progress2: 20, color2: 'red', imageSrc: '/sampleKaos.png' },
    { id: 2, name: 'Kemeja Polos Dewasa', price: 'Rp. 500k', sold: 64, progress1: 30, color1: 'blue', progress2: 15, color2: 'green', imageSrc: '/sampleKaos.png' },
    { id: 3, name: 'Topi Baseball Anak', price: 'Rp. 200k', sold: 120, progress1: 60, color1: 'yellow', progress2: 10, color2: 'orange', imageSrc: '/sampleKaos.png' },
    { id: 4, name: 'Sepatu Sneakers Anak', price: 'Rp. 800k', sold: 80, progress1: 40, color1: 'pink', progress2: 25, color2: 'cyan', imageSrc: '/sampleKaos.png' },
    { id: 5, name: 'Celana Jeans Dewasa', price: 'Rp. 700k', sold: 50, progress1: 25, color1: 'indigo', progress2: 12, color2: 'teal', imageSrc: '/sampleKaos.png' },
  ];

  return (
    <CardWithTitle className='my-5 lg:col-span-4 col-span-12' title="Top 5 Products">
      <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
        {DummyData.map(item => (
          <div key={item.id}>
            <p className='text-[10px] text-slate-900/60 flex justify-end'>{item.sold} product terjual</p>
            <div className='flex gap-x-3'>
              <div className='w-24 h-24 bg-gray-100 p-2'>
                <Image
                  src={item.imageSrc}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className='object-cover m-auto'
                />
              </div>
              <div className='flex flex-col'>
                <h3>{item.name}</h3>
                <div>
                  <p className='text-[12px] mb-1 text-slate-900/60'>{item.price}</p>
                  <Progress progress={item.progress1} color={item.color1} size={'sm'} />
                </div>
                <div className='mt-2'>
                  <p className='text-[12px] mb-1 text-slate-900/60'>{item.price}</p>
                  <Progress progress={item.progress2} color={item.color2} size={'sm'} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardWithTitle>
  )
}

export default TopProduct