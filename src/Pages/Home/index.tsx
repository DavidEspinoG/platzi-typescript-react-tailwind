import Card from "../../Components/Card";
import { fetchProducts } from "../../state/productsSlice";
import { useEffect } from "react";
import { Product } from "../../types";
import { useAppSelector, useAppDispatch } from "../../state/store";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const isProductDetailOpen = useAppSelector((state) => state.isProductDetailOpen);
  const dispatch = useAppDispatch();
  const products  = useAppSelector((state) => state.products);
  const loading = useAppSelector((state => state.loading ))
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
  return (
    <Layout>
      <>
        <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
          {loading && 'Cargando...'}
          {products?.map((product : Product) => {
            return <Card key={product.id} data={product} />
          })}
        </div>
        {isProductDetailOpen && <ProductDetail />}
      </>
    </Layout>
  )
}

export default Home;