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

                    <Product
                        image={limoenen}
                        alt='picture-of-a-lemon'
                        productName="Limoen"
                        productDescription=
                            "Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten
                            (Wijnruitfamilie).
                            Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."
                    />

                    <Product
                        image={ijsblokjes}
                        alt='picture-of-a-lemon'
                        productName = "Ijsblokjes"
                        productDescription=
                            "Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje.
                            Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen.
                            Als het goed is ziet jouw webpagina er nu zo uit."

                    />

                </>
            </main>
        </>
    );
}

export default App;
