import React from 'react';
import './App.css';
import citroenen from './assets/citroenen.jpeg'
import limoenen from './assets/limoenen.png'
import ijsblokjes from './assets/ijsblokjes.jpg'
import {ReactComponent as ShoppingCart} from './assets/winkelmandje.svg';

import Product from "./components/Product";

function App() {

    function logClick() {
        console.log('You clicked this button')
    }


    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Ons verhaal</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>

            </nav>

            <header>
                <h1>Fruit Perfection</h1>
                <button type="button" onClick={logClick}>
                    Shop nu!
                </button>
            </header>

            <main>
                <>
                    <Product
                    productName="Citroen"
                    productDescription="Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten
                            (Wijnruitfamilie).
                            Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."
                    image={citroenen}
                    imgDescription='lemon'
                    />




                    <article className="product">
                        <img
                            src={limoenen}
                            alt='picture-of-a-lemon'/>
                        <h2>"Limoen"</h2>
                        <p>
                            Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten
                            (Wijnruitfamilie).
                            Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen.
                        </p>
                    </article>

                    <article className="product">
                        <img
                            src={ijsblokjes}
                            alt='picture-of-a-lemon'/>
                        <h2>"Ijsblokjes"</h2>
                        <p>
                            Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje.
                            Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen.
                            Als het goed is ziet jouw webpagina er nu zo uit:
                        </p>
                    </article>

           </>
            </main>
        </>
    );
}

export default App;
