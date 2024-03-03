import CardWithTitle from '@/components/Card/CardWithTitle'
import React from 'react';
import { Table } from 'flowbite-react';

const Invoices = () => {

    const DummyData = [
        { id: 'INV-000001', name: 'Syafiq', dueDate: '12 juli 2024', status: true },
        { id: 'INV-000002', name: 'Safira Aulia', dueDate: '13 juli 2024', status: false },
        { id: 'INV-000003', name: 'Heriyana', dueDate: '14 juli 2024', status: true },
        { id: 'INV-000004', name: 'Syafiq', dueDate: '12 juli 2024', status: true },
        { id: 'INV-000005', name: 'Safira Aulia', dueDate: '13 juli 2024', status: false },
        { id: 'INV-000006', name: 'Heriyana', dueDate: '14 juli 2024', status: true },
        { id: 'INV-000007', name: 'Syafiq', dueDate: '12 juli 2024', status: true },
        { id: 'INV-000008', name: 'Safira Aulia', dueDate: '13 juli 2024', status: false },
        { id: 'INV-000009', name: 'Heriyana', dueDate: '14 juli 2024', status: true },
        { id: 'INV-0000010', name: 'Syafiq', dueDate: '12 juli 2024', status: true },
    ];

    return (
        <CardWithTitle className='my-5 lg:col-span-8 col-span-12' title="Invoices">
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <th className='text-start pl-6 text-secondary'>Invoices Id</th>
                        <th className='text-start pl-6 text-secondary'>Customer</th>
                        <th className='text-start pl-6 text-secondary'>Status</th>
                        <th className='text-start pl-6 text-secondary'>Due Date</th>
                        <th className='text-start pl-6 text-secondary'>Action</th>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {DummyData.map(item => (
                            <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>
                                    {item.status ? (
                                        <button className="bg-primary text-white py-2 px-4 rounded-lg w-full">
                                            Paid
                                        </button>
                                    ) : (
                                        <button className="bg-third text-white py-2 px-4 rounded-lg w-full">
                                            Unpaid
                                        </button>
                                    )}
                                </Table.Cell>
                                <Table.Cell>{item.dueDate}</Table.Cell>
                                <Table.Cell>
                                    <button className="bg-forty text-white py-2 px-4 rounded-lg w-full">
                                        Detail
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </CardWithTitle>
    )
}

export default Invoices