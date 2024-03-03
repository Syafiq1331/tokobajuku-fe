import CardWithTitle from '@/components/Card/CardWithTitle'
import React, { useState } from 'react'
import Chart from '@/helpers/Chart';
import { Table } from 'flowbite-react';
import { HiPencil, HiTrash, HiOutlineInformationCircle } from 'react-icons/hi';

const ListKeuangan = () => {

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
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.nama}</Table.Cell>
                <Table.Cell>{item.noWhatsapp}</Table.Cell>
                <Table.Cell>{item.Pendapatan}</Table.Cell>
            </Table.Row>
        ));


    return (
        <>
            <div className="grid grid-cols-12">
                <CardWithTitle className='my-5 col-span-12' title="Diagram pendapatan">
                    <Chart data={chartData} />
                </CardWithTitle>
            </div>

            <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-6">
                    <CardWithTitle className='my-5' title="Diagram Pendapatan">
                        <Chart data={chartData} />
                    </CardWithTitle>
                </div>
                <div className="col-span-6">
                    <CardWithTitle className='my-5 lg:col-span-4 col-span-12' title="List Category">
                        <div className="overflow-x-auto">
                            <Table>
                                <Table.Head>
                                    <th className='text-start pl-6 text-secondary'>No</th>
                                    <th className='text-start pl-6 text-secondary'>Nama</th>
                                    <th className='text-start pl-6 text-secondary'>No Whatsapp</th>
                                    <th className='text-start pl-6 text-secondary'>Pendapatan</th>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {displayData}
                                </Table.Body>
                            </Table>
                        </div>
                    </CardWithTitle>
                </div>
            </div>
        </>
    )
}

export default ListKeuangan
