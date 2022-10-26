const faker = require('faker')
const express = require("express")
const app = express()
const port = 8000

const createUser = () => {   
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.number()
    }
    return newUser
}

app.get('/api/users/new', (req, res) => {
    res.json(createUser())
})


app.listen( port, () => console.log(`Listening on port: ${port}`) )