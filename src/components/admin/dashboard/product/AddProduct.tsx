import CardWithTitle from '@/components/Card/CardWithTitle';
import React, { useState, useEffect } from 'react';
import { Label, Select, TextInput, Textarea } from 'flowbite-react';

interface Category {
    name: string;
    // other properties if there are any
}

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productEtalase, setProductEtalase] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [etalases, setEtalases] = useState([]);

    useEffect(() => {
        // Fetch categories from API
        fetch('http://tokobajuku.syafiqrzf.my.id/api/category')
            .then(response => response.json())
            .then(data => {
                setCategories(data.data);
                // Set default category
                if (data.length > 0) {
                    setProductCategory(data[0].name);
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    useEffect(() => {
        // Fetch categories from API
        fetch('http://tokobajuku.syafiqrzf.my.id/api/etalase')
            .then(response => response.json())
            .then(data => {
                setEtalases(data.data);
                // Set default category
                if (data.length > 0) {
                    setProductEtalase(data[0].name);
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleImageUpload = (e: any) => {
        const uploadedFile = e.target.files?.[0];
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

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            // Prepare form data
            const formData = new FormData();
            formData.append('name', productName);
            formData.append('price', productPrice);
            formData.append('size', productSize);
            formData.append('category', productCategory);
            formData.append('description', productDescription);
            images.forEach(image => {
                formData.append('images[]', image);
            });

            // Submit form data to API
            const response = await fetch('http://tokobajuku.syafiqrzf.my.id/api/product', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Product added successfully');
                // Reset form fields
                setProductName('');
                setProductPrice('');
                setProductSize('');
                setProductCategory(categories.length > 0 ? categories[0].name : '');
                setProductDescription('');
                setImages([]);
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <CardWithTitle className='my-5 lg:col-span-8 col-span-12' title="Tambah Product">
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-12 gap-x-4 gap-y-2'>
                    <div className='col-span-4'>
                        <div className='my-2'>
                            <Label htmlFor="productName" value="Nama Product" />
                        </div>
                        <TextInput id="productName" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                    </div>
                    <div className="max-w-md col-span-4">
                        <div className="mb-2 block">
                            <Label htmlFor="productPrice" value="Harga Product" />
                        </div>
                        <TextInput id="productPrice" type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
                    </div>
                    <div className="max-w-md col-span-4">
                        <div className="mb-2 block">
                            <Label htmlFor="productSize" value="Ukuran Product" />
                        </div>
                        <Select id="productSize" value={productSize} onChange={(e) => setProductSize(e.target.value)} required>
                            <option value="">Pilihan Ukuran Baju</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </Select>
                    </div>
                    <div className="col-span-4">
                        <div className="mb-2 block">
                            <Label htmlFor="productCategory" value="Category Product" />
                        </div>
                        <Select id="productCategory" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required>
                            <option value="">Pilihan Category Baju</option>
                            {categories.map((category: any) => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))}
                        </Select>
                    </div>
                    <div className="col-span-4">
                        <div className="mb-2 block">
                            <Label htmlFor="productCategory" value="Etalase Product" />
                        </div>
                        <Select id="productCategory" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required>
                            <option value="">Pilihan Etalase Baju</option>
                            {etalases.map((category: any) => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
                <hr className='my-4' />
                <div className='flex justify-end'>
                    <button type="submit" className='bg-primary text-white px-4 py-2 rounded-lg'>
                        Simpan
                    </button>
                </div>
            </form>
        </CardWithTitle>
    )
}

export default AddProduct;
