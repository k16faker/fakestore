import React from 'react'
import styled from 'styled-components'


interface SimpleProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

const SimpleForCategory:React.FC<SimpleProduct> = ({id, title, price, description, category, image}) => {
  return (
    <Container key={id}>
        <img src={image} alt="상품 이미지" />
        <p>{title}</p>
        <p>{price} $</p>
        <BtnZone>
            <CustomBtn>장바구니</CustomBtn>
            <CustomBtn>구매하기</CustomBtn>
        </BtnZone>
    </Container>
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
    border: 1px solid black;
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

const BtnZone = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

const CustomBtn = styled.button`
    width: 40%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: skyblue;
    color: white;
    font-size: 1rem;
    transition: all 0.5s;

    &:hover {
        cursor: pointer;
        background-color: blue;
    }
`;
