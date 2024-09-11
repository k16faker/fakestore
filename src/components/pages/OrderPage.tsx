import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";

const OrderPage = () => {
  const navigate = useNavigate();
  const carts = useAppSelector((state) => state.cart.items);

  const fullPrice = carts.reduce(
    (acc, cart) => acc + cart.price * cart.quantity,
    0
  );
  const fixedPrice = fullPrice.toFixed(2);

  return (
    <Container>
      <h1>Order</h1>
      <BuyerInfo>
        <h2>Buyer Information</h2>
        <LabelInputWrapper>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
        </LabelInputWrapper>
        <LabelInputWrapper>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
        </LabelInputWrapper>
        <LabelInputWrapper>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
        </LabelInputWrapper>
      </BuyerInfo>
      <h2>Order List</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.name}</td>
              <td>{cart.quantity}</td>
              <td>{cart.price * cart.quantity}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <h2>Total Price : {fixedPrice.slice(0, 20)}</h2>
      <h2>Payment Method</h2>
      <SelectWrapper>
        <StyledSelect>
            <StyledOption value="Visa">Visa</StyledOption>
            <StyledOption value="Master">Master</StyledOption>
            <StyledOption value="Kakao">Kakao Pay</StyledOption>
            <StyledOption value="Toss">Toss Pay</StyledOption>
            <StyledOption value="Naver">Naver Pay</StyledOption>
            <StyledOption value="Paypal">Paypal</StyledOption>
        </StyledSelect>
        <Arrow>▼</Arrow>
    </SelectWrapper>
    </Container>
  );
};

export default OrderPage;

const LabelInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;

  label {
    width: 10%; /* Label 크기 조정 가능 */
    margin-right: 10px;
    font-size: 1rem;
    color: #4b5563;
    font-weight: 500;
  }

  input {
    width: 50%;
    height: 40px;
    padding: 10px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background-color: #f9fafb;
    font-size: 1rem;
    color: #374151;
    outline: none;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
      background-color: #ffffff;
    }

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const BuyerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 60%;
  padding: 20px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  background-color: #f9fafb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    align-self: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #374151;
  }
`;


const SelectWrapper = styled.div`
  position: relative;
  width: 20%;
`;

const StyledSelect = styled.select`
  appearance: none;
  background-color: #f3f4f6;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  color: #374151;
  width: 100%;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
  }
`;

const Arrow = styled.div`
  content: '▼';
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  color: #6b7280;
`;

const StyledOption = styled.option`
  padding: 10px;
  font-size: 16px;
`;

const StyledTable = styled.table`
  width: 80%;
  margin-top: 20px;
  border-collapse: collapse;
  font-size: 16px;
  text-align: left;

  th, td {
    padding: 12px 15px;
    border: 1px solid #dddddd;
  }

  thead {
    background-color: #f3f4f6;
  }

  tbody tr:nth-child(even) {
    background-color: #f9fafb;
  }

  tbody tr:hover {
    background-color: #f1f5f9;
  }

  th {
    background-color: #e5e7eb;
    font-weight: bold;
    text-transform: uppercase;
    color: #374151;
  }

  td {
    color: #374151;
  }
`;

