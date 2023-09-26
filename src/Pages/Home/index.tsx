import Card from "../../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../state/productsSlice";
import { useEffect } from "react";
import { AppDispatch } from "../../types";
import { Product } from "../../types";
import { State } from "../../types";
import Layout from "../../Components/Layout";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const products  = useSelector((state : State) : [] => state.products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
  return (
    <Layout>
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product : Product) => {
          return <Card key={product.id} data={product} />
        })}
      </div>
    </Layout>
  )
}

export default Home;