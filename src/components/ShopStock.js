import React from "react";
import styled from 'styled-components';
import DisplayStockItem from "./DisplayStockItem";


const ShopStock = ({shopStock, basket, updateBasket}) => {

    const displayStockItems = shopStock.map((stockItem, index) => {
        return (
            <DisplayStockItem key={index} stockItem={stockItem} updateBasket={updateBasket}/>
        )
    })
    return (
        <>
            {displayStockItems}
        </>
    );
};

export default ShopStock;

