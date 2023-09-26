import { ReactElement, useState, useEffect } from "react";

const Card = (): ReactElement =>{
  const [items, setItems] = useState<[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await res.json();
      console.log(data)
      setItems(data);
    };
    fetchData();
  }, []);
  return (
    <div className='bg-white cursort-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1'>Electronics</span>
        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="headphones"/>
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full">
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>Headphones</span>
        <span className='text-sm font-medium'>$300</span>
      </p>
    </div>
  )
};

export default Card;