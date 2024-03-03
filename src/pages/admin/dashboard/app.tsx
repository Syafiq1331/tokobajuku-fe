import CardFlat from '@/components/Card/CardFlat';
import ChatCustomerLive from '@/components/admin/dashboard/ChatCustomerLive';
import Invoices from '@/components/admin/dashboard/Invoices/Invoices';
import StatistikOrder from '@/components/admin/dashboard/StatistikOrder';
import StockAvailableWarehouse from '@/components/admin/dashboard/StockAvailableWarehouse';
import WarehouseRevenue from '@/components/admin/dashboard/WarehouseRevenue';
import BestSellerProduct from '@/components/admin/dashboard/product/BestSellerProduct';
import TopProduct from '@/components/admin/dashboard/product/TopProduct';
import Layout from '@/components/admin/layout/Layout';
import React from 'react';

const App: React.FC = () => {

    return (
        <Layout className='-mt-14'>
            <div className="grid grid-cols-12 gap-4">
                <StatistikOrder />
                <StockAvailableWarehouse />
                <WarehouseRevenue />
            </div>

            <div className="grid grid-cols-12 gap-4">
                <Invoices />
                <TopProduct />
            </div>

            <div className="grid grid-cols-12 gap-4">
                <BestSellerProduct />
                <ChatCustomerLive />
            </div>
        </Layout>

    );
};

export default App;
