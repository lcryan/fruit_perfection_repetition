import React from 'react';

function Product(props) {
    return (
        <div>
            <article className="product">

                <img src="https://www.veggipedia.nl/assets/Uploads/Products/4a69d3b5ad/Citroen-fruit-veggipedia.png"
                     alt='picture-of-a-lemon'/>
                <h2>"Citroen"</h2>
                <p>
                    "Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten.
                    Van citroen kun je het vruchtvlees, het sap en de schil gebruiken.
                    Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                </p>


            </article>


        </div>
    );
}

export default Product;
