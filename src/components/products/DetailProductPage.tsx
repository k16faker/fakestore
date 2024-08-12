import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom'
import { addCart } from '../../store/cartSlice'
import { useAppDispatch } from '../../store/store'

interface DetailProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

const DetailProductPage = () => {

    const dispatch = useAppDispatch();

    const [quantity, setQuantity] = useState(1);

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const { data, isLoading, error } = useSWR(`https://fakestoreapi.com/products/${id}`, async (url) => {
        const response = await fetch(url);
        return response.json();
    });

    const checkQuantity = () => {
        if (quantity < 1) {
            alert('수량은 1개 이상이어야 합니다.');
            setQuantity(1);
        }
    }


    useEffect(() => {
        checkQuantity();
    }, [quantity]);


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
                <QuantityContainer>
                    <p>quantity : </p>
                    <button onClick={() => setQuantity(quantity - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </QuantityContainer>
                <ButtonContainer>
                    <button onClick={()=>dispatch(addCart({name: data.name, price: data.price, quantity: quantity}))}>장바구니 담기</button>
                    <button>구매하기</button>
                </ButtonContainer>
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

const QuantityContainer = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
    margin:10px auto;
    button {
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: lightgray;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background-color: gray;
            color: white;
            scale: 1.1;
        }
    }
    `;

const ButtonContainer = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
    margin-top: 20px;
    button {
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 5px;
        background-color: lightgray;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background-color: gray;
            color: white;
            scale: 1.1;
        }
    }
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