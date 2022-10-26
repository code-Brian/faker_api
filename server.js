const faker = require('faker')
const express = require("express")
const { application } = require('express')
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

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}

app.get('/api/users/new', (req, res) => {
    res.json(createUser())
})

app.get('/api/companies/create', (req, res) => {
    res.json(createCompany())
})

app.get('/api/user/company', (req,res) => {
    res.json({})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) )