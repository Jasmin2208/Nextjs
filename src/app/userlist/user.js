'use client'

function User(props) {
    return (
        <div>
            <button onClick={() => alert(props.name)}>Click Me</button>
        </div>
    )
}

export default User