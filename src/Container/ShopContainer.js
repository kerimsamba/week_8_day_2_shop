import React, { useEffect, useState } from "react";
import ShopStock from "../components/ShopStock";
import CustomerBasket from "../components/CustomerBasket";
import styled from 'styled-components';


const ShopContainer = () => {

    const Title = styled.h1`
    text-align: center;
    font-size: 1.5em;
    color: #fff;
    background-color: #062c43;
    margin: 0;
    padding: 1em;`;

    const shopStock = [
        { name: "The Terminator", cost: 10 },
        { name: "Bat out of Hell", cost: 20 },
        { name: "Swing Badda Badda Swing", cost: 5 },
        { name: "Up a creek without this paddle", cost: 30 }];



    const [basket, setBasket] = useState([]);

    const updateBasket = (itemToAddToBasket) => {
        const updateBasket = [...basket, itemToAddToBasket]
        setBasket(updateBasket)
    }

    return (
        <div>
            <Title>Let Us Drive You Batty</Title>
            <h2>Items for sale:</h2>
            <div>
            <ShopStock shopStock={shopStock} basket={basket} updateBasket={updateBasket} />
            </div>
            <h3>Your items</h3>
            <CustomerBasket basket={basket} />
        </div>)

}

export default ShopContainer;