import CardFlat from '@/components/Card/CardFlat';
import MonthYearPicker from '@/helpers/MonthYearPicker';
import React, { useState } from 'react';

const WarehouseRevenue = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };


    return (
        <CardFlat title="Statistik order" className='lg:col-span-4 col-span-12'>
            {/* Component MonthYearPicker */}
            <div className='pt-2'>
                <MonthYearPicker selectedDate={selectedDate} onDateChange={handleDateChange} />
            </div>
            <div className='flex justify-start gap-x-16 py-2 pt-4'>
                <div>
                    <h1 className='text-center font-bold text-lg'>Rp. 1 miliar</h1>
                    <p className='text-sm'>Pengeluaran/Modal Product</p>
                </div>
            </div>
            <div className='flex justify-end gap-x-16 py-2'>
                <div>
                    <h1 className='text-center font-extrabold text-lg'>Rp. 5 miliar</h1>
                    <p className='text-sm'>Pendapatan/Laba Product</p>
                </div>
            </div>
        </CardFlat>
    );
}

export default WarehouseRevenue;
