import Link from 'next/link'
import React from 'react'

function StudentList() {
    const studentsName = ["jasmin", "ajay", "vraj", "happy"]
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {
                    studentsName.map((student) => {
                        return <li><Link href={`/studentlist/${student}`}> {student} </Link></li>
                    })
                }
            </ul>
        </div>
    )
}

export default StudentList