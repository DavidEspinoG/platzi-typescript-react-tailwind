import store from "./state/store";
export type AppDispatch = typeof store.dispatch;

type Category = {
  id: number, 
  name: string, 
  image: string, 
  creationAt: string, 
  updatedAt: string, 
}

export type Product = {
  id: number, 
  title: string, 
  price: number, 
  description: string, 
  images: string[], 
  creationAt: string, 
  updatedAt: string, 
  category: Category
}

export type State = {
  products: [], 
  loading: boolean, 
};
