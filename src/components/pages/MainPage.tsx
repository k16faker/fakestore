import styled from "styled-components"
import ForMainPageProd from "../products/ForMainPageProd";

interface HomeListItem {
  name: string,
  src: string
}

const HomeList = [
  {
    name: "men's clothing",
    src:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    name: "women's clothing",
    src:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
  },
  {
    name: "jewelery",
    src: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    name: "electronics",
    src: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
  }
];


const MainPage = () => {
  return (
    <Container>
      <CustomUl>
        {HomeList.map((item, index) => {
          return (
            <ForMainPageProd key={index} name={item.name} src={item.src} />
          )
        })}
      </CustomUl>
    </Container>
  )
}

export default MainPage



const Container = styled.div`
  margin-top: 50px;
`;

const CustomUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  list-style: none;
  padding: 0; 
  margin: 0;
`;