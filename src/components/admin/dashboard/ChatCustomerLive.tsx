import CardFlat from '@/components/Card/CardFlat'
import CardWithTitle from '@/components/Card/CardWithTitle'
import React, { useState } from 'react'

const ChatCustomerLive = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const DummyData = [
        { id: 1, question: 'Apakah kaos anak ini tersedia untuk semua ukuran baju?', author: 'Syafiq', time: '1 menit yang lalu', isAnswered: true },
        { id: 2, question: 'Bagaimana cara mengukur ukuran baju yang tepat?', author: 'Rita', time: '2 jam yang lalu', isAnswered: false },
        { id: 3, question: 'Apa bahan kaos yang digunakan?', author: 'Ahmad', time: '1 hari yang lalu', isAnswered: true },
        { id: 1, question: 'hehe?', author: 'Syafiq', time: '1 menit yang lalu', isAnswered: true },
        { id: 2, question: 'Bagaimana cara mengukur ukuran baju yang tepat?', author: 'Rita', time: '2 jam yang lalu', isAnswered: false },
        { id: 3, question: 'Apa bahan kaos yang digunakan?', author: 'Ahmad', time: '1 hari yang lalu', isAnswered: true },
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = DummyData.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };
    return (
        <CardWithTitle className='my-5 lg:col-span-6 col-span-12' title="Live pertanyaan customer">
            {currentItems.map(item => (
                <CardFlat key={item.id} className='flex w-full items-start justify-start gap-x-4'>
                    <div>
                        <h3 className='text-[14px] font-medium'>{item.question}</h3>
                        <p className='text-[12px] mt-4'>{item.author} - {item.time}</p>
                    </div>
                    <button className={`bg-${item.isAnswered ? 'primary' : 'third'} text-white py-2 rounded-lg w-1/2`}>
                        <p className='text-sm'>{item.isAnswered ? 'Sudah di balas' : 'Belum di balas'}</p>
                    </button>
                </CardFlat>
            ))}
            <div className="flex justify-center mt-4">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="mr-2 bg-forty text-white py-2 px-4 rounded-lg">Previous</button>
                <button onClick={handleNextPage} disabled={indexOfLastItem >= DummyData.length} className="bg-forty text-white py-2 px-4 rounded-lg">Next</button>
            </div>
        </CardWithTitle >
    )
}

export default ChatCustomerLive