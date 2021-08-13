users = []

const addUser = ({id, username, room}) => {   
    
    // Validate the data
    if (!username || !room) {
        return {
            error: 'username and room Cannot be null'
        }
    }

    // Clean the data
    
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Check if existing User
    const existingUser = users.find((user) => {
        return user.username === username && user.room === room
    })

    if (existingUser) {
        return {
            error: 'User already exist'
        }
    }

    // Store the user
    const user =  {
        id, username, room
    }
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user)=>user.id === id)
    if (index != -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user)=> user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user)=> user.room === room.trim().toLowerCase())
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}