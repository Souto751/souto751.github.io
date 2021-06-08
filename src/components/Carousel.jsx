import React from 'react';
import {Carousel} from 'react-bootstrap'

export default function Slider() {
    return (
        <Carousel fade className="carousel">
            <Carousel.Item className="slide">
                <img
                className="d-block w-100"
                src="https://github.com/Souto751/portfolio/blob/main/src/images/watchlist.jpg?raw=true"
                alt="First slide" />
                <Carousel.Caption className="text">
                <h3>Watchlist</h3>
                <p>This is a watchlist that displays all the series, movies and animes that I watched with my girlfriend.</p>
                <div className="buttons">
                    <a href="https://github.com/Souto751/watchlist" target="_blank" rel="noreferrer"><button className="btn btn-secondary">Repo</button></a>
                    <a href="https://souto751.github.io/watchlist/" target="_blank" rel="noreferrer"><button className="btn btn-primary">Page</button></a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide">
                <img
                className="d-block w-100"
                src="https://github.com/Souto751/portfolio/blob/main/src/images/food4wild.jpg?raw=true"
                alt="Second slide"
                />

                <Carousel.Caption className="text">
                <h3>Food4Wild</h3>
                <p>This is a Product Landing Page, that sells food for wild animals. It's only an example.</p>
                <div className="buttons">
                    <a href="https://codepen.io/Souto751/pen/YzGeNKo" target="_blank" rel="noreferrer"><button className="btn btn-secondary">Repo</button></a>
                    <a href="https://codepen.io/Souto751/full/YzGeNKo" target="_blank" rel="noreferrer"><button className="btn btn-primary">Page</button></a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide">
                <img
                className="d-block w-100"
                src="https://github.com/Souto751/portfolio/blob/main/src/images/bakery.jpg?raw=true"
                alt="Third slide"
                />

                <Carousel.Caption className="text">
                <h3>Pupi's Bakery</h3>
                <p>This is a web page for a Bakery.</p>
                <div className="buttons">
                    <a href="https://github.com/Souto751/pupiBakery" target="_blank" rel="noreferrer"><button className="btn btn-secondary">Repo</button></a>
                    <a href="https://pupi-bakery.web.app/" target="_blank" rel="noreferrer"><button className="btn btn-primary">Page</button></a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide">
                <img
                className="d-block w-100"
                src="https://github.com/Souto751/portfolio/blob/main/src/images/testbook.jpg?raw=true"
                alt="Third slide"
                />

                <Carousel.Caption className="text">
                <h3>testBook</h3>
                <p>This is a social network, that is not working by the moment.</p>
                <div className="buttons">
                    <a href="https://github.com/Souto751/testbook" target="_blank" rel="noreferrer"><button className="btn btn-secondary">Repo</button></a>
                    <a href="https://testbook-bd5cc.web.app/login" target="_blank" rel="noreferrer"><button className="btn btn-primary">Page</button></a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide">
                <img
                className="d-block w-100"
                src="https://github.com/Souto751/portfolio/blob/main/src/images/randomQuote.jpg?raw=true"
                alt="Third slide"
                />

                <Carousel.Caption className="text">
                <h3>Random Quote Generator</h3>
                <p>This is a random developers' quotes generator.</p>
                <div className="buttons">
                    <a href="https://codepen.io/Souto751/pen/gOLppbq" target="_blank" rel="noreferrer"><button className="btn btn-secondary">Repo</button></a>
                    <a href="https://codepen.io/Souto751/full/gOLppbq" target="_blank" rel="noreferrer"><button className="btn btn-primary">Page</button></a>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}
