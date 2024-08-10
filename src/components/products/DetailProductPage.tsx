import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom'

interface DetailProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

const DetailProductPage = () => {

    const [quantity, setQuantity] = useState(1);

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const { data, isLoading, error } = useSWR(`https://fakestoreapi.com/products/${id}`, async (url) => {
        const response = await fetch(url);
        return response.json();
    });


  return (
    <Container>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {data && (
            <ProductContainer>
                <img src={data.image} alt="상품 이미지" />
                <h3>{data.title}</h3>
                <p>{data.price} $</p>
                <p>{data.description}</p>
            </ProductContainer>
        )}
    </Container>

  )
}

export default DetailProductPage


const Container = styled.div`
    margin-top: 50px;
    width: 100%;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    img {
        width: 200px;
        height: 200px;
    }
    h3 {
        margin-top: 10px;
    }
    p {
        margin-top: 10px;
    }
`;