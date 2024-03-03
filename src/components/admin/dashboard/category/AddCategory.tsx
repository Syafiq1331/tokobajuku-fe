import CardFlat from '@/components/Card/CardFlat'
import CardWithTitle from '@/components/Card/CardWithTitle'
import React, { useState } from 'react'
import { TextInput, Label, Select } from 'flowbite-react';

const AddCategory = () => {

    const [images, setImages] = useState([]);

    const handleImageUpload = (e: any) => {
        const uploadedImages = [...images];
        uploadedImages.push(e.target.files[0]);
        setImages(uploadedImages);
    };

    const handleImageDelete = (index: any) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };


    return (
        <CardWithTitle className='my-5 lg:col-span-8 col-span-12' title="Tambah Kategori">
            <div className="grid grid-cols-12 gap-6">
                <div className='col-span-6'>
                    <div className="mb-2 block">
                        <Label htmlFor="text" value="Nama kategori" />
                    </div>
                    <TextInput id="text" type="text" placeholder="kaos anak" required />
                </div>
                <div className="max-w-md col-span-6">
                    <div className="mb-2 block">
                        <Label htmlFor="countries" value="Status kategori" />
                    </div>
                    <Select id="countries" required>
                        <option>Published</option>
                        <option>Unpublished</option>
                    </Select>
                </div>
            </div>

            <hr className='mt-12 mb-4' />

            <div className="flex justify-end">
                <button className='bg-primary text-white px-4 py-2 rounded-lg'>
                    Tambah Kategori
                </button>
            </div>

        </CardWithTitle>
    )
}

export default AddCategory