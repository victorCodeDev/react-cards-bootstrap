import React from 'react';
import Card from './Card';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const cards = [
    {
        id: 1,
        title: 'Netflix',
        image: image1,
        text: 'Disfruta de Netflix, películas y series en streaming en tu smart TV, consola, PC, Mac, móvil, tableta y más dispositivos.',
        url: 'https://www.netflix.com',
    },
    {
        id: 2,
        title: 'Disney Plus',
        image: image2,
        text: 'Las mejores historias. Desde nuevos lanzamientos y Originales Disney+, hasta clásicos inolvidables. Sin Anuncios. Descargas Ilimitadas. 7 perfiles por cuenta. 4 pantallas simultáneas.',
        url: 'https://www.disneyplus.com/es-py',
    },
    {
        id: 3,
        title: 'Amazon Prime',
        image: image3,
        text: 'Disfruta de Amazon Originals exclusivas, además de películas y series populares, por PYG 24 900/mes. Disfruta ahora, cancela cuando quieras.',
        url: 'https://www.primevideo.com'
    },
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    // eslint-disable-next-line
                    cards.map((card) => (
                        <div className="col-md-4 mb-3" key={card.id}>
                            <Card title={card.title} imageSource={card.image} text={card.text} url={card.url} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
