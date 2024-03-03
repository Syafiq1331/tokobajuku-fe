import CardFlat from '@/components/Card/CardFlat'
import ListKeuangan from '@/components/admin/dashboard/keuangan/ListKeuangan'
import ListMonitoring from '@/components/admin/dashboard/monitoring/ListMonitoring'
import Layout from '@/components/admin/layout/Layout'
import React from 'react'

const app = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Perhitungan Keuangan Warehouse' className='-mt-12' classNameBody='text-xl font-[500]' />
            <ListKeuangan />
        </Layout>
    )
}

export default app