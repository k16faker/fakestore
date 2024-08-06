import {useEffect, useState} from 'react'
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';


interface SimpleProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}


const CategoryPage = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('cate');

    const [products, setProducts] = useState<SimpleProduct[]>([]);

    const getProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        setProducts(response.data);
    };

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <Container>
      <h1>{category}</h1>
      <button onClick={() => console.log(products)}>hello</button>
    </Container>
  )
}

export default CategoryPage

const Container = styled.div`
    margin-top: 30px;
    width: 100%;
`;