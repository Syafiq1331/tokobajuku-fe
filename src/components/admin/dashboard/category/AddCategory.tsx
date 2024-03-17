import CardFlat from '@/components/Card/CardFlat'
import CardWithTitle from '@/components/Card/CardWithTitle'
import React, { useState } from 'react'
import { TextInput, Label, Select } from 'flowbite-react';
import { useRouter } from 'next/router';

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryStatus, setCategoryStatus] = useState('published');

    const router = useRouter();

    const handleChangeName = (event: any) => {
        setCategoryName(event.target.value);
    };

    const handleChangeStatus = (event: any) => {
        setCategoryStatus(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch('http://tokobajuku.syafiqrzf.my.id/api/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: categoryName,
                    status: categoryStatus === 'published' ? true : false
                })
            });
            if (response.ok) {
                // Redirect ke halaman lain setelah berhasil menambahkan
                router.push('/admin/category/app');
            } else {
                // Handle kesalahan jika ada
                console.error('Gagal menambahkan kategori');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <CardWithTitle className='my-5 lg:col-span-8 col-span-12' title="Tambah Kategori">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-6">
                    <div className='col-span-6'>
                        <div className="mb-2 block">
                            <Label htmlFor="text" value="Nama kategori" />
                        </div>
                        <TextInput id="text" type="text" placeholder="kaos anak" value={categoryName} onChange={handleChangeName} required />
                    </div>
                    <div className="max-w-md col-span-6">
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Status kategori" />
                        </div>
                        <Select id="countries" value={categoryStatus} onChange={handleChangeStatus} required>
                            <option value="published">Published</option>
                            <option value="unpublished">Unpublished</option>
                        </Select>
                    </div>
                </div>

                <hr className='mt-12 mb-4' />

                <div className="flex justify-end">
                    <button type="submit" className='bg-primary text-white px-4 py-2 rounded-lg'>
                        Tambah Kategori
                    </button>
                </div>
            </form>
        </CardWithTitle>
    )
}

export default AddCategory;
