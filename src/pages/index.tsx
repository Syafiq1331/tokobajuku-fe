import Layout from '@/components/customer/Layout/Layout'
import ProductLayout from '@/components/customer/Product/ProductLayout';
import CardHeaderProduct from '@/components/customer/card/CardHeaderProduct';
import CardProduct from '@/components/customer/card/CardProduct'
import Slider from '@/components/customer/card/Slider'

export default function Home() {
  return (
    <Layout>
      <Slider/>
      <ProductLayout/>

    </Layout>
  )
}