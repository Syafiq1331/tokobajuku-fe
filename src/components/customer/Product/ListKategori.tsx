import React from 'react'
import CardHeaderProduct from '../card/CardHeaderProduct'
import { FaTshirt } from 'react-icons/fa';

const CategoryCard = ({ icon, title }: { icon: JSX.Element, title: string }) => {
    return (
        <div className="bg-white rounded-lg lg:col-span-2 col-span-6 m-2 shadow-lg p-6 group hover:bg-primary">
            <div className="w-full mr-4 flex justify-center flex-col">
                <div className='mx-auto'>
                    {icon}
                </div>
                <h3 className="text-lg text-center font-medium mt-3 text-gray-800 group-hover:text-white">{title}</h3 >
            </div>
        </div >
    );
};

const ListKategori = () => {
    return (
        <div className='py-4'>
            <CardHeaderProduct title='Kategori' />
            <h3 className='text-2xl mt-4 text-secondary'>Cari berdasarkan kategori</h3>
            <div className="grid grid-cols-12 gap-x-4 mt-4">
                <CategoryCard icon={<FaTshirt className="text-4xl text-primary group-hover:text-white" />} title="Kaos Anak Polos" />
                <CategoryCard icon={<FaTshirt className="text-4xl text-primary group-hover:text-white" />} title="Kaos Anak Polos" />
                <CategoryCard icon={<FaTshirt className="text-4xl text-primary group-hover:text-white" />} title="Kaos Anak Polos" />
                <CategoryCard icon={<FaTshirt className="text-4xl text-primary group-hover:text-white" />} title="Kaos Anak Polos" />
                <CategoryCard icon={<FaTshirt className="text-4xl text-primary group-hover:text-white" />} title="Kaos Anak Polos" />
                <CategoryCard icon={<FaTshirt className="text-4xl text-primary group-hover:text-white" />} title="Kaos Anak Polos" />
            </div>
        </div>
    )
}

export default ListKategori