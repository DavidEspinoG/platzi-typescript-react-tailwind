import { ReactElement } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/Navbar';
import './App.css'
import Layout from '../../Components/Layout';

const AppRoutes = () : ReactElement | null => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},
  ])
  return routes;
}

const App = () : ReactElement => {

  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
 
}

export default App
