import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { removeCart } from "../../store/cartSlice";

const CartPage = () => {
  const navigate = useNavigate();
  const carts = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const fullPrice = carts.reduce((acc, cart) => acc + cart.price * cart.quantity, 0);
  const fixedPrice = fullPrice.toFixed(2);

  if (carts.length === 0) {
    return (
        <Container>
            <h2>장바구니가 비었습니다.</h2>
        </Container>
    );
  }

  return (
    <Container>
      <h1>장바구니</h1>
      <HeaderContainer>
        <HeaderItem style={{ flex: 2 }}>상품명</HeaderItem>
        <HeaderItem style={{ flex: 1 }}>가격</HeaderItem>
        <HeaderItem style={{ flex: 1 }}>수량</HeaderItem>
      </HeaderContainer>
      <CustomUl>
        {carts.map((cart) => (
          <li key={cart.id}>
            <ItemContainer>
              <ItemName onClick={()=> navigate(`/product?id=${cart.id}`)}>{cart.name}</ItemName>
              <ItemPrice>{cart.price} $</ItemPrice>
              <ItemQuantity>{cart.quantity}</ItemQuantity>
              <RemoveButton onClick={() => dispatch(removeCart({ name: cart.name }))}>
                삭제
              </RemoveButton>
            </ItemContainer>
          </li>
        ))}
      </CustomUl>
      <h2>총 가격: {fixedPrice} $</h2>
      <CustomBtn onClick={() => console.log(carts)}>주문하기</CustomBtn>
    </Container>
  );
};

export default CartPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

    h1 {
        width: 300px;
        text-align: center;
        margin: 20px auto;
    }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-weight: bold;
`;

const HeaderItem = styled.div`
  text-align: center;

  &:first-child {
    text-align: left;
  }
`;

const CustomUl = styled.ul`
  width: 80%;
  margin-top: 0;
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid black;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ItemName = styled.span`
  flex: 2;
`;

const ItemPrice = styled.span`
  flex: 1;
  text-align: right;
  margin-right:20px;
`;

const ItemQuantity = styled.span`
  flex: 1;
  text-align: right;
  margin-right: 100px; /* 버튼과의 간격 추가 */
`;

const RemoveButton = styled.button`
  flex: 0 0 40px; /* 버튼 길이 고정 (40px) */
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
`;

const CustomBtn = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  color: white;
  background-color: blue;
  font-size:1.2rem;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;
