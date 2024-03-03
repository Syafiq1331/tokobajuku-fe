import CardWithTitle from '@/components/Card/CardWithTitle';
import React, { useState } from 'react';
import { HiPencil, HiTrash, HiOutlineInformationCircle } from 'react-icons/hi';
import { Table } from 'flowbite-react';
import Link from 'next/link';

const ListProduct = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const DummyData = [
        { id: 'Pd-000001', name: 'Kaos minion anak', category: 'Kaos Anak', status: true },
        { id: 'Pd-000002', name: 'Kaos minion anak', category: 'Kaos Polos Anak', status: false },
        { id: 'Pd-000003', name: 'Kaos minion anak', category: 'Kaos Polos Anak', status: true },
        { id: 'Pd-000004', name: 'Kaos minion anak', category: 'Kaos Anak', status: true },
        { id: 'Pd-000005', name: 'Kaos minion anak', category: 'Kaos Polos Anak', status: false },
        { id: 'Pd-000006', name: 'Kaos minion anak', category: 'Kaos Polos Anak', status: true },
        { id: 'Pd-000007', name: 'Kaos minion anak', category: 'Kaos Anak', status: true },
        { id: 'Pd-000008', name: 'Kaos minion anak', category: 'Kaos Polos Anak', status: false },
        { id: 'Pd-000009', name: 'Kaos minion anak', category: 'Kaos Polos Anak', status: true },
        { id: 'Pd-0000010', name: 'Kaos minion anak', category: 'Kaos Anak', status: true },
    ];

    const pageCount = Math.ceil(DummyData.length / usersPerPage);

    const changePage = (selectedPage: any) => {
        setPageNumber(selectedPage);
    };

    const displayData = DummyData
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map(item => (
            <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>
                    {item.status ? (
                        <button className="bg-primary text-white py-2 px-4 rounded-lg w-full">
                            Pusblished
                        </button>
                    ) : (
                        <button className="bg-third text-white py-2 px-4 rounded-lg w-full">
                            Unpublish
                        </button>
                    )}
                </Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
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
            <div className='flex justify-end mt-6'>
                <Link href="/admin/product/add-product">
                    <button className='bg-primary text-white px-4 py-2 rounded-lg'>
                        Tambah Product
                    </button>
                </Link>
            </div>
            <CardWithTitle className='my-5 lg:col-span-4 col-span-12' title="List Product">
                <div className="overflow-x-auto">
                    <Table>
                        <Table.Head>
                            <th className='text-start pl-6 text-secondary'>Kode Product</th>
                            <th className='text-start pl-6 text-secondary'>Nama Product</th>
                            <th className='text-start pl-6 text-secondary'>Status Product</th>
                            <th className='text-start pl-6 text-secondary'>Category</th>
                            <th className='pl-6 text-secondary text-center'>Action</th>
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
        </>
    );
};

export default ListProduct;
