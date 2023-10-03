import { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import './styles.css';
import { useAppDispatch, useAppSelector } from "../../state/store";
import { hideCheckout } from "../../state/productsSlice";

const CheckOutSideMenu = () : ReactElement => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  return (
  <aside className="checkout-side-menu flex flex-col fixed border border-black rounded-lg bg-white ">
    <div className="flex justify-between items-center p-6">
      <h2 className="font-medium text-xl">My Order</h2>
      <div><XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={() => dispatch(hideCheckout())}/></div>
    </div>
  </aside>
  )
};

export default CheckOutSideMenu; 
