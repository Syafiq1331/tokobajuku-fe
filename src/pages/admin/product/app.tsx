import CardFlat from '@/components/Card/CardFlat'
import ListProduct from '@/components/admin/dashboard/product/ListProduct'
import Layout from '@/components/admin/layout/Layout'
import React from 'react'

const app = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Product' className='-mt-12' classNameBody='text-xl font-[500]' />
            <ListProduct />
        </Layout>
    )
}

export default app