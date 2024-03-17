import CardFlat from '@/components/Card/CardFlat'
import ListBrand from '@/components/admin/dashboard/brand/ListBrand'
import ListEtalase from '@/components/admin/dashboard/etalase/ListEtalase'
import Layout from '@/components/admin/layout/Layout'
import React from 'react'

const app = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Brand' className='-mt-12 mb-4' classNameBody='text-xl font-[500]' />
            <ListBrand />
        </Layout>
    )
}

export default app