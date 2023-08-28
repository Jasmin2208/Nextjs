import Link from 'next/link'
import React from 'react'

function StudentList() {
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            <li>
                <Link href="/studentlist/jasmin">Jasmin</Link>
            </li>
            <li>
                <Link href="/studentlist/ajay">Ajay</Link>
            </li>
            <li>
                <Link href="/studentlist/happy">Happy</Link>
            </li>
            <li>
                <Link href="/studentlist/Vraj">Vraj</Link>
            </li>
        </ul>
    </div>
  )
}

export default StudentList