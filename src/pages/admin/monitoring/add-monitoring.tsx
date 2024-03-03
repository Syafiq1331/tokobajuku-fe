import React from 'react';
import CardFlat from '@/components/Card/CardFlat'
import Layout from '@/components/admin/layout/Layout';
import AddMonitoring from '@/components/admin/dashboard/monitoring/AddMonitoring';


const addMonitoring = () => {
    return (
        <Layout>
            <CardFlat title='Halaman Monitoring Admin' className='-mt-12' classNameBody='text-xl font-[500]' />
            <AddMonitoring />
        </Layout>
    )
}

export default addMonitoring;