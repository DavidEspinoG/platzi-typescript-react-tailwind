import { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";


import './styles.css';

const ProductDetail = () : ReactElement => {
 return (
  <aside className="product-detail flex flex-col fixed border border-black rounded-lg bg-white ">
    <div className="flex justify-between items-center p-6">
      <h2 className="font-medium text-xl">Detail</h2>
      <div><XMarkIcon className="h-6 w-6 text-black-500"/></div>
    </div>
  </aside>
 )
};

export default ProductDetail; 
