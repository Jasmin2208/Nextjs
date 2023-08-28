'use client'

function Lecture({ params }) {
    return (
        <div>
            <h1>College day : {params.lecture[0]}</h1>
            <h2>    Lecture : {params.lecture[1]}</h2>

        </div>
    )
}

export default Lecture