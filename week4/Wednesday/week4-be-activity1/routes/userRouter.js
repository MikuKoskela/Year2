const express = require('express')
const router = express.Router()

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userControllers')


router.get('/',getAllUsers)

router.post('/', createUser)

router.put('/:userId', updateUser)

router.get('/:userId', getUserById)

router.delete('/:userId', deleteUser)


module.exports = router;