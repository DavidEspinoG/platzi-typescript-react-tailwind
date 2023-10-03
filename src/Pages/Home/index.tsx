import Card from "../../Components/Card";
import { fetchProducts } from "../../state/productsSlice";
import { useEffect } from "react";
import { Product } from "../../types";
import { useAppSelector, useAppDispatch } from "../../state/store";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import CheckOutSideMenu from "../../Components/CheckoutSideMenu";

function Home() {
  const isProductDetailOpen = useAppSelector((state) => state.isProductDetailOpen);
  const isCheckoutOpen = useAppSelector((state) => state.isCheckoutOpen);
  const dispatch = useAppDispatch();
  const products  = useAppSelector((state) => state.products);
  const loading = useAppSelector((state => state.loading ));
  const counter = useAppSelector((state => state.counter));
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
        {(isCheckoutOpen && counter > 0) && <CheckOutSideMenu />}
      </>
    </Layout>
  )
}

export default Home;