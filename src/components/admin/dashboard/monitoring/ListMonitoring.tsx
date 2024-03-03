import CardWithTitle from '@/components/Card/CardWithTitle';
import React, { useState } from 'react';
import { HiPencil, HiTrash, HiOutlineInformationCircle } from 'react-icons/hi';
import { Table } from 'flowbite-react';
import Link from 'next/link';
import Chart from '@/helpers/Chart';

const ListMonitoring = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;

    const DummyData = [
        { id: '1.', nama: 'Didi Suherman', 'noWhatsapp': '+62-87654253', status: true, 'Pendapatan': 'Rp. 50.000.000' },
        { id: '2.', nama: 'Abah Lengkong', 'noWhatsapp': '+62-87656353', status: false, 'Pendapatan': 'Rp. 40.000.000' },
    ];

    const chartData = {
        title: 'Sample Chart',
        labels: ['Senin', 'Selasa', 'Rabu', 'kamis', 'Jumat', 'Sabtu'],
        values: [12, 19, 3, 5, 2, 3],
        colors: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
    };

    const pageCount = Math.ceil(DummyData.length / usersPerPage);

    const changePage = (selectedPage: any) => {
        setPageNumber(selectedPage);
    };

    const displayData = DummyData
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map(item => (
            <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{item.nama}</Table.Cell>
                <Table.Cell>{item.noWhatsapp}</Table.Cell>
                <Table.Cell>
                    {item.status ? (
                        <button className="bg-primary text-white py-2 px-4 rounded-lg w-full">
                            Active
                        </button>
                    ) : (
                        <button className="bg-third text-white py-2 px-4 rounded-lg w-full">
                            Unactive
                        </button>
                    )}
                </Table.Cell>
                <Table.Cell>{item.Pendapatan}</Table.Cell>
                <Table.Cell className='text-center'>
                    {/* Tombol Delete */}
                    <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg mr-2">
                        <HiTrash className="inline-block mr-1" />
                        Delete
                    </button>
                    {/* Tombol Edit */}
                    <button className="bg-third hover:bg-blue-700 text-white py-2 px-4 rounded-lg mr-2">
                        <HiPencil className="inline-block mr-1" />
                        Edit
                    </button>
                    {/* Tombol Detail */}
                    <button className="bg-primary hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
                        <HiOutlineInformationCircle className="inline-block mr-1" />
                        Detail
                    </button>
                </Table.Cell>

            </Table.Row>
        ));

    return (
        <>
            <div className='flex justify-end mt-4'>
                <Link href="/admin/monitoring/add-monitoring">
                    <button className='bg-primary text-white px-4 py-2 rounded-lg'>
                        Tambah Category
                    </button>
                </Link>
            </div>
            <CardWithTitle className='my-5 lg:col-span-4 col-span-12' title="List Category">
                <div className="overflow-x-auto">
                    <Table>
                        <Table.Head>
                            <th className='text-start pl-6 text-secondary'>Nama</th>
                            <th className='text-start pl-6 text-secondary'>No Whatsapp</th>
                            <th className='text-start pl-6 text-secondary'>Status</th>
                            <th className='text-start pl-6 text-secondary'>Pendapatan</th>
                            <th className='text-center pl-6 text-secondary'>Action</th>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {displayData}
                        </Table.Body>
                    </Table>
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: pageCount }, (_, index) => (
                            <button
                                key={index}
                                className={`mx-1 px-3 py-1 rounded-lg border ${pageNumber === index ? 'bg-primary text-white' : 'bg-white text-black hover:bg-gray-200'}`}
                                onClick={() => changePage(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </CardWithTitle>

            <div className='grid grid-cols-12 gap-4'>
                <CardWithTitle className='my-5 lg:col-span-6 col-span-12' title="Diagram admin teraktif">
                    <Chart data={chartData} />
                </CardWithTitle>
                <CardWithTitle className='my-5 lg:col-span-6 col-span-12' title="Diagram admin top seller">
                    <Chart data={chartData} />
                </CardWithTitle>
            </div>
        </>
    );
};

export default ListMonitoring;
