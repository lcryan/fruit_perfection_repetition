import React from 'react';

function Product ({productName, productDescription, image, imgDescription}) {
    return (
        <article className="product">
            <img src={image} alt={imgDescription}/>
            <h2 className="product-name">{productName}</h2>
            <p className="product-description">{productDescription}</p>
        </article>
    );
}

export default Product;
