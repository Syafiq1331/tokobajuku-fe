import CardFlat from '@/components/Card/CardFlat'
import ListEtalase from '@/components/admin/dashboard/etalase/ListEtalase'
import Layout from '@/components/admin/layout/Layout'
import React from 'react'

const app = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Etalase' className='-mt-12 mb-4' classNameBody='text-xl font-[500]' />
            <ListEtalase />
        </Layout>
    )
}

export default app