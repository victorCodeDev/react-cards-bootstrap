import React from 'react'
import image1 from '../assets/image1.jpg'

function Card() {
    return (
        <div className="card text-center bg-dark">
            <div className="card-body text-light">
                <img src={image1} alt="" />
                <h4 className="card-title">Mi Titulo</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Placeat voluptatem pariatur necessitatibus ad quia veritatis
                    eveniet, ab ullam, adipisci error autem mollitia labore dicta
                    nisi quidem neque optio nihil minus?
                </p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">Go to Website</a>
            </div>

        </div>
    )
}

export default Card
