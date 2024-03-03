import React from 'react';
import CardFlat from '@/components/Card/CardFlat'
import Layout from '@/components/admin/layout/Layout'
import AddProduct from '@/components/admin/dashboard/product/AddProduct';

const addProduct = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Product' className='-mt-12' classNameBody='text-xl font-[500]' />
            <AddProduct />
        </Layout>
    )
}

export default addProduct;