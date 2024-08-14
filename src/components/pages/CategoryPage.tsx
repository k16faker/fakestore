import {useEffect, useState} from 'react'
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import SimpleForCategory from '../products/SimpleForCategory';


interface SimpleProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
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
      <CustomUl>
        {products.map((product, index) => {
          return (
            <SimpleForCategory key={index} id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} image={product.image} rating={product.rating} />
          )
        }
        )}
      </CustomUl>
    </Container>
  )
}

export default CategoryPage

const Container = styled.div`
    margin-top: 30px;
    width: 100%;
`;

const CustomUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
`;