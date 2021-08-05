const users = []

const findUser = (userId) => {
    const user = users.filter(u => {u.id === userId ? u : null})
    return user
}

const getUsers = () => {
    return users
}

const createUser = (user) => {
    const u = users.filter(u => {u.name === user.name ? u : null})
    if(u) {
        return console.log('User already exists')
    } else {
        users.push(user)
        return user
    }
}

module.exports = {
    findUser,
    getUsers,
    createUser
}