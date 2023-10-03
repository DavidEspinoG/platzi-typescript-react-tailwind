import { ReactElement } from "react";
import { Product as ProductType } from "../../types";
import { useAppDispatch } from "../../state/store";
import { showProductDetail, updateProductToShow, 
  addProductToCart, showCheckout } from "../../state/productsSlice";

const Card = ({data}: {data: ProductType } ): ReactElement =>{
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => {
        dispatch(showProductDetail());
        dispatch(updateProductToShow(data));
      }} 
      className='bg-white cursort-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1'>{data.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.title}/>
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addProductToCart(data));
            dispatch(showCheckout());
          }} 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full cursor-pointer">
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-sm font-medium'>${data.price}</span>
      </p>
    </div>
  )
};

export default Card;