import Layout from '@/components/customer/Layout/Layout'
import FlashSale from '@/components/customer/Product/FlashSale';
import ListKategori from '@/components/customer/Product/ListKategori';
import ListProducts from '@/components/customer/Product/ListProducts';
import ProductBestSeller from '@/components/customer/Product/ProductBestSeller';
import CardHeaderProduct from '@/components/customer/card/CardHeaderProduct';
import CardProduct from '@/components/customer/card/CardProduct'
import Slider from '@/components/customer/card/Slider'

export default function Home() {
  return (
    <Layout>
      <Slider />
      <FlashSale />
      <ListKategori />
      <ProductBestSeller />
      <ListProducts />
    </Layout>
  )
}