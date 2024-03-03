import React from 'react';
import CardFlat from '@/components/Card/CardFlat'
import Layout from '@/components/admin/layout/Layout'
import AddEtalase from '@/components/admin/dashboard/etalase/AddEtalase';

const addCategory = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Category' className='-mt-12' classNameBody='text-xl font-[500]' />
            <AddEtalase />
        </Layout>
    )
}

export default addCategory;