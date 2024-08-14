import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


interface SimpleProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
    rating: {
        rate: number,
        count: number
    }
}

const SimpleForCategory:React.FC<SimpleProduct> = ({id, title, price, description, category, image, rating}) => {
  return (
    <CutsomLink to={`/product?id=${id}`}>
      <Container key={id}>
        <img src={image} alt="상품 이미지" />
        <p>{title}</p>
        <p>Rating : {rating.rate}</p>
        <p>Count : {rating.count}</p>
        <p>{price} $</p>
        {/* <BtnZone>
            <CustomBtn>장바구니</CustomBtn>
            <CustomBtn>구매하기</CustomBtn>
        </BtnZone> */}
      </Container>
    </CutsomLink>
  )
}

export default SimpleForCategory

const Container = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    padding: 10px;
    width: 80%;
    height: 400px;
    border-radius: 10px;
    transition: all 0.5s;
    text-align: center;

    img {
      width: 50%;
      height: 50%;
      margin: 0 auto;
    }

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
    h1 {
        margin-left: 20px;
    }
`;


const CutsomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
