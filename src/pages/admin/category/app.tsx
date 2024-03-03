import CardFlat from '@/components/Card/CardFlat'
import ListCategory from '@/components/admin/dashboard/category/ListCategory'
import Layout from '@/components/admin/layout/Layout'
import React from 'react'

const app = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Category' className='-mt-12 mb-4' classNameBody='text-xl font-[500]' />
            <ListCategory />
        </Layout>
    )
}

export default app