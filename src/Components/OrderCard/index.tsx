import { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Product } from "../../types";
import { useAppDispatch } from "../../state/store";
import { deleteProductFromCart } from "../../state/productsSlice";

const OrderCard = ({data} : {data : Product}) : ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center m-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img src={data.image} className="w-full h-full rounded-lg object-cover" alt={data.title}/>
        </figure>
        <p className="text-sm font-light">{data.title}</p>
      </div>
        <p className="text-lg font-medium">${data.price}</p>
        <XMarkIcon 
          className="h-6 w-6 text-black-500 cursor-pointer"
          onClick={() => dispatch(deleteProductFromCart(data.id))}
        />
    </div>
  )
};

export default OrderCard;