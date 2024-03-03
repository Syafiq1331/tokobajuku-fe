import CardFlat from '@/components/Card/CardFlat'
import MonthYearPicker from '@/helpers/MonthYearPicker'
import React, { useState } from 'react'

const StockAvailableWarehouse = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <CardFlat title="Stock Barang tersedia di gudang" className='lg:col-span-4 col-span-12'>
            {/* Component MonthYearPicker */}
            <div className='pt-2'>
                <MonthYearPicker selectedDate={selectedDate} onDateChange={handleDateChange} />
            </div>
            <div className='flex justify-center gap-x-16 py-2 pt-4'>
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
            <div className='flex justify-center gap-x-16 py-2'>
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
        </CardFlat>
    )
}

export default StockAvailableWarehouse