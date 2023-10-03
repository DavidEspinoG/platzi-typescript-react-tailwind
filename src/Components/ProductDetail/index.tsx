import { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import './styles.css';
import { useAppDispatch } from "../../state/store";
import { hideProductDetail } from "../../state/productsSlice";

const ProductDetail = () : ReactElement => {
  const dispatch = useAppDispatch();
 return (
  <aside className="product-detail flex flex-col fixed border border-black rounded-lg bg-white ">
    <div className="flex justify-between items-center p-6">
      <h2 className="font-medium text-xl">Detail</h2>
      <div><XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={() => dispatch(hideProductDetail())}/></div>
    </div>
  </aside>
 )
};

export default ProductDetail; 
