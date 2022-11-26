const getAll = (req, res) => {
    res.send('GET all users');
}

const login = async (req, res) => {
    res.send('POST login route');
}

// export the functions
module.exports = {
    getAll,
    login
}