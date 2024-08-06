import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ForMainPageProdProps {
  name: string,
  src: string
}

const ForMainPageProd:React.FC<ForMainPageProdProps> = ( {name, src} ) => {


  return (
    <CutsomLink to={`/category?cate=${name}`}>
      <CustomLi>
        <h2>{name}</h2>
        <CustomImg src={src} alt="상품 이미지" />
      </CustomLi>
    </CutsomLink>
  )
}

export default ForMainPageProd

const CustomLi = styled.li`
  width: 70%;
  height: 450px;
  margin: 0 auto;
  border:none;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }

  h2 {
    margin-left: 20px;
  }
`;

const CustomImg = styled.img`
  width: 100%;
  height: 80%;
`;

const CutsomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

