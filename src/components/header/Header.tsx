import React from 'react'
import styled from 'styled-components'
import { Link, LinkProps } from 'react-router-dom'


import { useAppSelector } from "../../store/store"
import { addCart } from "../../store/cartSlice";

const Header = () => {

  const carts = useAppSelector((state) => state.cart.items);


  return (
    <CustomHeader>
      <HeaderZone>
        <CutsomLink to="/">
          <Logo>B-Market</Logo>
        </CutsomLink>
        <SearchZone>
          <input type="text" placeholder="검색어를 입력해주세요" />
          <button>검색</button>
        </SearchZone>
        <CustomUl>
          <li><CutsomLink to="/cart">장바구니     {carts.length}</CutsomLink></li>
          <li><CutsomLink to="/login">로그인</CutsomLink></li>
        </CustomUl>
      </HeaderZone>
      <CategoryZone>
        <CustomUl>
          <li><CutsomLink to="/bestproduct">베스트 상품</CutsomLink></li>
          <li><CutsomLink to="/hotdeal">핫딜</CutsomLink></li>
          <li><CutsomLink to="/clubsignup">클럽 가입</CutsomLink></li>
          <li><CutsomLink to="/benefitproduct">혜택 상품</CutsomLink></li>
        </CustomUl>
      </CategoryZone>
    </CustomHeader>
  )
}

export default Header

const Logo = styled.h1`
  margin-left: 20px;
`;

const CutsomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CustomHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderZone = styled.div`
  display:flex;
  justify-content: space-between;
`;

const SearchZone = styled.form`
  display:flex;
  align-items: center;
  margin-left: 20px;
  input {
    width: 300px;
    height: 30px;
    border: 2px solid blue;
    border-radius: 15px;
    text-align: center;
  }
  button {
    width: 50px;
    height: 30px;
    margin-left: 10px;
    border-radius: 15px;
    border:none;
    color:black;

    &:hover {
      cursor: pointer;
      background-color: skyblue;
      color: black;
  }
`;

const CategoryZone = styled.div`
  display:flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;  
  background-color: skyblue;
`;


const CustomUl = styled.ul`
  display:flex;
  width:650px;
  margih-right: 20px;
  justify-content: space-between;
  height: 50px;
  list-style: none;
  align-items: center;

  li {
    padding: 5px;
    align-items: center;
    transition: 0.3s;
  }

  li:hover {
    background-color: white;
    border-radius: 10px;
  }
`;


