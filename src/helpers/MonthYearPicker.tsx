import React, { useState } from 'react';

interface MonthYearPickerProps {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
    startYear: number; // Add startYear property to the interface
    endYear: number;
}

const MonthYearPicker: React.FC<MonthYearPickerProps> = ({ selectedDate, onDateChange, startYear, endYear }) => {
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index); // Generate array of years based on startYear and endYear

    const [isOpenMonth, setIsOpenMonth] = useState(false);
    const [isOpenYear, setIsOpenYear] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('Januari');
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Set initial selected year to current year

    const toggleMonthDropdown = () => {
        setIsOpenMonth(!isOpenMonth);
    };

    const toggleYearDropdown = () => {
        setIsOpenYear(!isOpenYear);
    };

    const selectMonth = (month: string) => {
        setSelectedMonth(month);
        setIsOpenMonth(false);
    };

    const selectYear = (year: number) => {
        setSelectedYear(year);
        setIsOpenYear(false);
    };

    return (
        <div className="flex justify-between">
            <div className="relative mr-4">
                <div className="flex items-center" onClick={toggleMonthDropdown}>
                    <p className="text-sm">Bulan -</p>
                    <h1 className="text-center font-medium text-lg text-primary ml-2 cursor-pointer">{selectedMonth}</h1>
                </div>
                {isOpenMonth && (
                    <div className="absolute bg-white border border-gray-300 mt-1 py-2 px-4 rounded shadow-md z-10">
                        {months.map(month => (
                            <div key={month} className="cursor-pointer hover:bg-gray-200" onClick={() => selectMonth(month)}>
                                <p className="text-sm">{month}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative">
                <div className="flex items-center" onClick={toggleYearDropdown}>
                    <p className="text-sm">Tahun -</p>
                    <h1 className="text-center font-medium text-lg text-primary ml-2 cursor-pointer">{selectedYear}</h1>
                </div>
                {isOpenYear && (
                    <div className="absolute bg-white border border-gray-300 mt-1 py-2 px-4 rounded shadow-md z-10">
                        {years.map(year => (
                            <div key={year} className="cursor-pointer hover:bg-gray-200" onClick={() => selectYear(year)}>
                                <p className="text-sm">{year}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MonthYearPicker;
