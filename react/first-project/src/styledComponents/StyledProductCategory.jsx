import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 800px;
  font-family: Arial, sans-serif;`
;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;`
;

export const CategoryButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#4CAF50" : "#f1f1f1")};
  color: ${({ isActive }) => (isActive ? "white" : "#333")};
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#45a049" : "#ddd")};
  }`
;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;`
;

export const ProductCard = styled.div`
  width: 150px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h4 {
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #555;
  }`
;