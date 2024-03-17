import React from 'react';
import CardFlat from '@/components/Card/CardFlat'
import Layout from '@/components/admin/layout/Layout'
import AddBrand from '@/components/admin/dashboard/brand/AddBrand';

const addCategory = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Brand' className='-mt-12' classNameBody='text-xl font-[500]' />
            <AddBrand />
        </Layout>
    )
}

export default addCategory;