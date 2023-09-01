'use client'

async function DeleteUser(props) {
    const id = props.id
    const handleDelete = async ()=>{
        let data = await fetch(`http://localhost:3000/api/user/${id}`, {
            method: "DELETE",
          })
          data = await data.json()
          if (data.error) {
            alert(data.result)
          } else {
            alert(data.result)
          }
    }
  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteUser