const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}
const addUser = (user) => {
    return fetch('https://jsonplaceholder.typicode.com/users',{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(value => value.json());
}
export {fetchUsers, addUser};