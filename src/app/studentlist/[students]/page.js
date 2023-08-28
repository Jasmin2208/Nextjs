'use client'

function Students({ params }) {
    return (
        <>
            <div>Students Detail</div>
            <h3>Name : {params.students}</h3>
        </>
    )
}

export default Students