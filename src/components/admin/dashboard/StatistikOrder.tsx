import CardFlat from '@/components/Card/CardFlat'
import MonthYearPicker from '@/helpers/MonthYearPicker';
import Image from 'next/image'
import React, { useState } from 'react'

const StatistikOrder = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <CardFlat title="Statistik order" className='lg:col-span-4 col-span-12'>
            {/* Component MonthYearPicker */}
            <div className='pt-2'>
                <MonthYearPicker selectedDate={selectedDate} onDateChange={handleDateChange} startYear={0} endYear={0} />
            </div>
            <div className='flex gap-x-14 justify-center py-6'>
                <div>
                    <h1 className='text-center font-bold text-xl'>10</h1>
                    <p>Ditunda</p>
                </div>
                <div>
                    <h1 className='text-center font-bold text-xl'>10</h1>
                    <p>Packing</p>
                </div>
                <div>
                    <h1 className='text-center font-bold text-xl'>10</h1>
                    <p>Sukses</p>
                </div>
            </div>
            <div className='flex gap-x-4'>
                <div className='p-4 bg-primary w-12'>
                    <Image src={'/admin/dashboard/shopping-cart.png'}
                        width={100}
                        height={100}
                        alt="Shopping Cart logo"
                        className='mx-auto'
                    />
                </div>
                <div>
                    <p>Total Orders</p>
                    <h1 className='font-bold text-xl'>100</h1>
                </div>
            </div>
        </CardFlat>
    )
}

export default StatistikOrder