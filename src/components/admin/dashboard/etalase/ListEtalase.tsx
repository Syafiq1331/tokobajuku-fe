import CardWithTitle from '@/components/Card/CardWithTitle';
import React, { useState, useEffect } from 'react';
import { HiPencil, HiTrash, HiOutlineInformationCircle } from 'react-icons/hi';
import { Table } from 'flowbite-react';
import Link from 'next/link';

const ListEtalase = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [brandData, setBrandData] = useState([]);
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tokobajuku.syafiqrzf.my.id/api/etalase');
                const data = await response.json();
                setBrandData(data.data);
            } catch (error) {
                console.error('Error fetching brand data:', error);
            }
        };

        fetchData();
    }, []);

    const pageCount = Math.ceil(brandData.length / usersPerPage);

    const changePage = (selectedPage: any) => {
        setPageNumber(selectedPage);
    };

    const handleDelete = async (id: any) => {
        try {
            const response = await fetch(`https://tokobajuku.syafiqrzf.my.id/api/etalase/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Refresh data setelah berhasil menghapus
                const newData = brandData.filter((item: { id: any }) => item.id !== id);
                setBrandData(newData);
            } else {
                console.error('Gagal menghapus etalase');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className='flex justify-end'>
                <Link href="/admin/etalase/add-etalase">
                    <button className='bg-primary text-white px-4 py-2 rounded-lg'>
                        Tambah Etalase
                    </button>
                </Link>
            </div>
            <CardWithTitle className='my-5 lg:col-span-4 col-span-12' title="List Etalase">
                <div className="overflow-x-auto">
                    <Table>
                        <Table.Head>
                            <th className='text-start pl-6 text-secondary'>No</th>
                            <th className='text-start pl-6 text-secondary'>Nama</th>
                            <th className='text-start pl-6 text-secondary'>Status Etalase</th>
                            <th className='pl-6 text-secondary text-center'>Action</th>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {brandData
                                .slice(pagesVisited, pagesVisited + usersPerPage)
                                .map((item: any, index) => (
                                    <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{item.name}</Table.Cell>
                                        <Table.Cell>
                                            {item.status === "published" ? (
                                                <button className="bg-primary text-white py-2 px-4 rounded-lg w-full">
                                                    Published
                                                </button>
                                            ) : (
                                                <button className="bg-third text-white py-2 px-4 rounded-lg w-full">
                                                    Unpublished
                                                </button>
                                            )}
                                        </Table.Cell>
                                        <Table.Cell className='text-center'>
                                            {/* Tombol Delete */}
                                            <button onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg mr-2">
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
                                ))}
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

export default ListEtalase;
