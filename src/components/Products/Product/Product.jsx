import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const Grid = styled.div`
  #product-countaine {
    display: "grid";
    grid-template-coloums: "repeat(4,15%)";
    border: "1px solid black";
    margin: "auto";
  }
`;

const Product = () => {
  // Note: this id should come from api
  const product = {};
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    const productData = async () => {
      let res = await fetch("http://localhost:8080/products");
      let data1 = await res.json();
      setData(data1);
    };
    productData();
  }, []);

  return (
    <Grid data-testid="product-countaine">
      {data.map((item) => {
        return (
          <>
            <div data-cy={`product-${product.id}`}>
              <h3 data-cy="product-name">{item.name}</h3>
              <h6 data-cy="product-description">{item.description}</h6>
              <button data-cy="product-add-item-to-cart-button">
                Add to Cart
              </button>
              <div>
                <button data-cy="product-increment-cart-item-count-button">
                  +
                </button>
                <span data-cy="product-count">
                  {
                    // Count here from CartItems
                    count
                  }
                </span>
                <button data-cy="product-decrement-cart-item-count-button">
                  -
                </button>
                <button data-cy="product-remove-cart-item-button">
                  Remove from Cart
                </button>
              </div>
            </div>
          </>
        );
      })}
    </Grid>
  );
};

export default Product;
