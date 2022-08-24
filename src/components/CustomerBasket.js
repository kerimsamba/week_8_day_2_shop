import React from "react";
import styled from 'styled-components';
import ShopStock from "./ShopStock";

const customerBasket = ({basket}) => {

    const displayBasketItems = basket.map((basketItem, index) => {
        if (basketItem) {
            return (
                <p key={index}>
                    Item: {basketItem.name} cost: {basketItem.cost}
                </p>
            )
        }
        return ("Empty");
    })
    return (
        <p> {displayBasketItems} </p>
    );
}

export default customerBasket;