
import styled from 'styled-components';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import './App.css';
import RootPage from './components/pages/RootPage';
import MainPage from './components/pages/MainPage';
import CategoryPage from './components/pages/CategoryPage';
import DetailProductPage from './components/products/DetailProductPage';
import CartPage from './components/pages/CartPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import OrderPage from './components/pages/OrderPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      children: [
        {
          path:'/',
          element: <MainPage />
        },
        {
          path:'/category',
          element: <CategoryPage />
        },
        {
          path:'/product',
          element:<DetailProductPage />
        },
        {
          path:'/cart',
          element:<CartPage />
        },
        {
          path:'/order',
          element:<OrderPage />
        },
        {
          path:'/login',
          element:<LoginPage />
        },
        {
          path:'/signup',
          element:<SignupPage />
        }
      ],
    },
  ]);


  return (
    <FullDiv>
      <RouterProvider router={router}></RouterProvider>
    </FullDiv>
  );
}

export default App;

const FullDiv = styled.div`
  width: 1500px;
  margin: 0 auto;
  font-family: 'IBM Plex Sans KR', sans-serif;
`;

