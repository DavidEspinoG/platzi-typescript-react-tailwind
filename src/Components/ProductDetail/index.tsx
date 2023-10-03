import { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import './styles.css';
import { useAppDispatch, useAppSelector } from "../../state/store";
import { hideProductDetail } from "../../state/productsSlice";

const ProductDetail = () : ReactElement => {
  const dispatch = useAppDispatch();
  const productToShow = useAppSelector((state) => state.productToShow);
 return (
  <aside className="product-detail flex flex-col fixed border border-black rounded-lg bg-white ">
    <div className="flex justify-between items-center p-6">
      <h2 className="font-medium text-xl">Detail</h2>
      <div><XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={() => dispatch(hideProductDetail())}/></div>
    </div>
    <figure className="px-6">
      <img
        className="w-full h-full rounded-lg" 
        src={productToShow.images[0]} 
        alt={productToShow.title} 
      />
    </figure>
    <p className="flex flex-col p-6">
      <span className="font-medium text-2xl">${productToShow.price}</span>
      <span className="font-medium text-md">{productToShow.title}</span>
      <span className="font-light text-sm">{productToShow.description}</span>
    </p>
  </aside>
 )
};

export default ProductDetail; 
