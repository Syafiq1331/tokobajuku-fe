import CardFlat from '@/components/Card/CardFlat';
import StatistikOrder from '@/components/admin/dashboard/StatistikOrder';
import StockAvailableWarehouse from '@/components/admin/dashboard/StockAvailableWarehouse';
import WarehouseRevenue from '@/components/admin/dashboard/WarehouseRevenue';
import Layout from '@/components/admin/layout/Layout';
import Navbar from '@/components/admin/layout/Navbar';
import Sidebar from '@/components/admin/layout/Sidebar';
import React, { useState } from 'react';

const App: React.FC = () => {

    return (
        <Layout>
            <div className="grid grid-cols-12 gap-4">
                <StatistikOrder/>
                <StockAvailableWarehouse/>
                <WarehouseRevenue/>
            </div>
        </Layout>
            
    );
};

export default App;
