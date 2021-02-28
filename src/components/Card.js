import React from 'react';
import './card.css';
import PropTypes from 'prop-types'

function Card({ title, imageSource, text, url }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="card-body text-light" >
                <div className="overflow">
                    <img src={imageSource} alt="Sitio Streamming" className="card-img-top img-height" />
                </div>
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Placeat voluptatem pariatur necessitatibus ad quia veritatis eveniet, ab ullam, adipisci error autem mollitia labore dicta nisi quidem neque optio nihil minus?'
                    }

                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank" rel="noreferrer">Ir al sitio</a>
            </div>

        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
}

export default Card
