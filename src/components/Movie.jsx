import React from "react"

export default function Movie(props) {
    return (
        <div className="movie">
            <div>
                <img  className="movie--image" src={props.posterImage} alt="" />
            </div>
            <div className="movie--info">
                <h2 className="movie--title">{props.id}. {props.title}</h2>
                <div className="movie--info--two">
                    <div>{props.year}</div>
                    <div>{props.duration}</div>
                    <div>{props.ratingSystem}</div>
                </div>
                <div className="movie--info--three">
                    <i class="fa-solid fa-star"></i>
                    <div className="movie--rating">{props.rating}</div>
                    <div>{props.votes}</div>
                </div>
            </div>
        </div>
    )
}