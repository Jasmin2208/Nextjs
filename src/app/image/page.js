'use client'
import React, { useState } from 'react'

function page() {
    const [file, setFile] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.set("file", file)
        const result = await fetch("api/uploadfile", {
            method: "POST",
            body: data
        })
        console.log(result);
    }

    return (
        <>
            <div className='heading'>Upload File</div>
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={(e) => setFile(e.target.files?.[0])} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default page