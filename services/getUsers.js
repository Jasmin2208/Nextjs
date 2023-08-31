async function getUsers() {
    const data = await fetch("https://dummyjson.com/users")
    return data.json()
}

export default getUsers;