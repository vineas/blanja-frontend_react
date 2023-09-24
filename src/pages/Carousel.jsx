import React from 'react'
const card1 = require('../img/card1.png');
const card2 = require('../img/card2.png');

const Carousel = () => {
    return (
        <>
            Copy code
            <style>
                @media (max-width: 768px) {"{"}
                .carousel-item img {"{"}
                max-width: 91%; height: auto; margin: 0 auto;
                {"}"}
                {"}"}
            </style>
            <section className="container" style={{ marginTop: 110 }}>
                <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-ride="carousel"
                    style={{ maxWidth: '1000px', margin: '0 auto' }}
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval={10000}>
                            <img
                                src={card1}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" data-interval={2000}>
                            <img
                                src={card2}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-target="#carouselExampleInterval"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-target="#carouselExampleInterval"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Carousel