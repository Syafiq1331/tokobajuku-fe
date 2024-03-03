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

    const [images, setImages] = useState<File[]>([]);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0]; // Null check here
        if (uploadedFile) {
            const uploadedImages = [...images];
            uploadedImages.push(uploadedFile);
            setImages(uploadedImages);
        }
    };

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
                            <option value="">Pilihan Ukuran Baju</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </Select>
                    </div>
                    <div className="max-w-md my-2">
                        <div className="mb-2 block">
                            <Label htmlFor="brandProduct" value="Brand Product" />
                        </div>
                        <Select id="brandProduct" required>
                            <option value="">Pilihan Etalase Baju</option>
                            <option value="Distro Ubuntu">Distro Ubuntu</option>
                            <option value="Eleknia">Eleknia</option>
                            <option value="FzAuth">FzAuth</option>
                            <option value="Kostku">Kostku</option>
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
                            <Label htmlFor="ukuranProduct" value="Category Product" />
                        </div>
                        <Select id="ukuranProduct" required>
                            <option value="">Pilihan Category Baju</option>
                            <option value="Kaos Anak">Kaos Anak</option>
                            <option value="Kaos Polos Anak">Kaos Polos Anak</option>
                            <option value="Kaos Distro Polos">Kaos Distro Polos</option>
                            <option value="Kaos Distro">Kaos Distro</option>
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
                                <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} className="w-1/2 object-cover" />
                                <button onClick={() => handleImageDelete(index)} className="absolute top-0 left-1 bg-red-500 p-2 text-white rounded-full">
                                    <p className='text-sm'>X</p>
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