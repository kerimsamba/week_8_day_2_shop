import React from "react";
import styled from 'styled-components';


const DisplayStockItem = ({ stockItem, basket, updateBasket }) => {


    const ListContainer = styled.div`
    margin: 1em;
    display: flex;
    justify-content: space-evenly; `


    const Button = styled.button`
  font-size: 1em;
  border: 2px solid #ced7e0;
  border-radius: 10px;
  min-width: 12em;
  box-shadow: 3px 5px #888888; 
  align-self: flex-end`
  






    const handleClick = () => {
        return (updateBasket(stockItem))
    }

    return (
        <ListContainer>
            <p>Name: {stockItem.name} Cost: {stockItem.cost}</p>

            <Button type="submit" onClick={handleClick}>Add to basket</Button>
        </ListContainer>

    )
}

export default DisplayStockItem;
