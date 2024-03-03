import CardFlat from '@/components/Card/CardFlat'
import ListMonitoring from '@/components/admin/dashboard/monitoring/ListMonitoring'
import Layout from '@/components/admin/layout/Layout'
import React from 'react'

const app = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Monitoring Admin' className='-mt-12' classNameBody='text-xl font-[500]' />
            <ListMonitoring />
        </Layout>
    )
}

export default app