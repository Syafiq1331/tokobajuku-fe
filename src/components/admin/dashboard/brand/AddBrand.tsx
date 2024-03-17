import CardWithTitle from '@/components/Card/CardWithTitle'
import React, { useState } from 'react'
import { TextInput, Label, Select } from 'flowbite-react';
import { useRouter } from 'next/router';

const AddBrand = () => {
    const [namaKategori, setNamaKategori] = useState('');
    const [statusKategori, setStatusKategori] = useState('published'); // Default status

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('https://tokobajuku.syafiqrzf.my.id/api/brand', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: namaKategori,
                    status: statusKategori,
                }),
            });
            if (response.ok) {
                // Redirect ke halaman lain setelah berhasil menambahkan
                router.push('/admin/brand/app');
            } else {
                // Handle kesalahan jika ada
                console.error('Gagal menambahkan kategori');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <CardWithTitle className='my-5 lg:col-span-8 col-span-12' title="Tambah Brand">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-6">
                    <div className='col-span-6'>
                        <div className="mb-2 block">
                            <Label htmlFor="text" value="Nama Brand" />
                        </div>
                        <TextInput id="text" type="text" placeholder="Distro Ubuntu" value={namaKategori} onChange={(e) => setNamaKategori(e.target.value)} required />
                    </div>
                    <div className="max-w-md col-span-6">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Status Brand" />
                        </div>
                        <Select id="countries" value={statusKategori} onChange={(e) => setStatusKategori(e.target.value)} required>
                            <option value="published">Published</option>
                            <option value="unpublished">Unpublished</option>
                        </Select>
                    </div>
                </div>

                <hr className='mt-12 mb-4' />

                <div className="flex justify-end">
                    <button type="submit" className='bg-primary text-white px-4 py-2 rounded-lg'>
                        Tambah Brand
                    </button>
                </div>
            </form>
        </CardWithTitle>
    )
}

export default AddBrand;
