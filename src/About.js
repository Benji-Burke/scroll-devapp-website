import React from 'react'

export default function About() {
    return (

            <div className="main" id="about">
                <div className="main__container">
                    <div className="main__img--container">
                        <div className="main__img--card"><i className="fas fa-layer-group"></i></div>
                    </div>
                    <div className="main__content">
                        <h1>What do we do?</h1>
                        <h2>We help businesses scale</h2>
                        <p>Schedule a call to learn more about our services</p>
                        <button className="main__btn"><a href="#">Schedule Call</a></button>
                    </div>
                </div>
            </div>

    )
}
