import React from "react"
import Movie from "./Movie"
import data from "../data"

export default function Movies() {

    const movies = data.map(movie => {
        return <Movie {...movie} />
    })

    return (
        <div>
            {movies}
        </div>
    )
}