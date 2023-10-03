import { ReactElement } from "react";
import { useAppSelector, useAppDispatch } from "../../state/store";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { addProductToCart, showCheckout } from "../../state/productsSlice";
import { Product } from "../../types";

const ConditionalButton = ({id, data} : {id : number, data: Product}) : ReactElement => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  let filtered = cart.filter((product) => product.id === id);
  let isInCart = filtered.length > 0;
  return (
    <>
      {isInCart ? 
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute right-1 top-1 flex justify-center items-center bg-slate-200 w-6 h-6 rounded-full cursor-pointer p-1"
        >
        <CheckIcon className="w-full h-full text-green-500"/> 
        </div> :
        <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addProductToCart(data));
          dispatch(showCheckout());
        }} 
        className="absolute right-1 top-1 flex justify-center items-center bg-white w-6 h-6 rounded-full cursor-pointer p-1">
        <PlusIcon className="w-full h-full text-black-500"/>  
        </div>
      }
    </>
  )
};

export default ConditionalButton;