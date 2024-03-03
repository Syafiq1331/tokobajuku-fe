import React from 'react';
import CardFlat from '@/components/Card/CardFlat'
import ListProduct from '@/components/admin/dashboard/product/ListProduct'
import Layout from '@/components/admin/layout/Layout'
import AddCategory from '@/components/admin/dashboard/category/AddCategory';

const addCategory = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Category' className='-mt-12' classNameBody='text-xl font-[500]' />
            <AddCategory />
        </Layout>
    )
}

export default addCategory;