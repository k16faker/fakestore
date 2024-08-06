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
        <h1>{title}</h1>
    </Container>
  )
}

export default SimpleForCategory

const Container = styled.li``;