const filterActiveUsers = (users) => {
    
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid"
    } else if (!users.every(user => 'isActive' in user)) {
        return "Invalid"
    }

    const findTheActiveUser = users.filter(user => user.isActive)

    return findTheActiveUser;
}