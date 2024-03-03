import CardFlat from '@/components/Card/CardFlat'
import CardWithTitle from '@/components/Card/CardWithTitle'
import React, { useState } from 'react'
import { TextInput, Label, Select, FileInput, Textarea } from 'flowbite-react';

/**
 * Function for adding a product.
 *
 * @return {void} 
 */
const AddProduct = () => {

    const [images, setImages] = useState([]);

    const handleImageUpload = (e: any) => {
        const uploadedImages = [...images];
        uploadedImages.push(e.target.files[0]);
        setImages(uploadedImages);
    };

    /**
     *
     * @param {any} index - the index of the image to be deleted
     * @return {void} 
     */
    const handleImageDelete = (index: any) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };


    return (
        <CardWithTitle className='my-5 lg:col-span-8 col-span-12' title="Tambah Product">
            <div className='grid grid-cols-12 gap-x-4 gap-y-2'>
                <div className='col-span-4'>
                    <div className='my-2'>
                        <div className="mb-2 block">
                            <Label htmlFor="small" value="Nama Product" />
                        </div>
                        <TextInput id="small" type="text" sizing="sm" />
                    </div>
                    <div className="max-w-md my-2">
                        <div className="mb-2 block">
                            <Label htmlFor="ukuranProduct" value="Ukuran Product" />
                        </div>
                        <Select id="ukuranProduct" required>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </Select>
                    </div>
                    <div className="max-w-md my-2">
                        <div className="mb-2 block">
                            <Label htmlFor="brandProduct" value="Brand Product" />
                        </div>
                        <Select id="brandProduct" required>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </Select>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='my-2'>
                        <div className="mb-2 block">
                            <Label htmlFor="small" value="Harga Product" />
                        </div>
                        <TextInput id="small" type="text" sizing="sm" />
                    </div>
                    <div className="max-w-md my-2">
                        <div className="mb-2 block">
                            <Label htmlFor="ukuranProduct" value="Etalase Product" />
                        </div>
                        <Select id="ukuranProduct" required>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </Select>
                    </div>
                    <div className="max-w-md my-2">
                        <div>
                            <Label htmlFor="upload" value="Upload Image" />
                            <input type="file" id="upload" accept="image/*" onChange={handleImageUpload} className="mt-2" />
                        </div>
                    </div>
                </div>
                <div className="max-w-md col-span-4">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your message" />
                    </div>
                    <Textarea id="comment" placeholder="Leave a comment..." required rows={10} />
                </div>
                <div className="col-span-6">
                    <div className="flex flex-wrap gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative">
                                <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} className="w-40 h-40 object-cover" />
                                <button onClick={() => handleImageDelete(index)} className="absolute top-0 right-0 bg-red-500 text-white p-1.5 rounded-full">
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className='my-4' />
            <div className='flex justify-end'>
                <button className='bg-primary text-white px-4 py-2 rounded-lg'>
                    Simpan
                </button>
            </div>
        </CardWithTitle>
    )
}

export default AddProduct