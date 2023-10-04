import { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import './styles.css';
import { useAppDispatch, useAppSelector } from "../../state/store";
import { hideCheckout } from "../../state/productsSlice";
import OrderCard from "../OrderCard";

const CheckOutSideMenu = () : ReactElement => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const total = cart.reduce((accumulator, product) => accumulator + product.price, 0);
  return (
  <aside className="checkout-side-menu flex flex-col fixed border border-black rounded-lg bg-white overflow-y-scroll">
    <div className="flex justify-between items-center p-6">
      <h2 className="font-medium text-xl">My Order</h2>
      <div><XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={() => dispatch(hideCheckout())}/></div>
    </div>
    <div className="px-3">
      {cart.map((product) => <OrderCard key={product.id} data={product}/>)}
    </div>
    <div className="p-5 underline">
      <h2>Total: ${total}</h2>
    </div>
  </aside>
  )
};

export default CheckOutSideMenu; 
