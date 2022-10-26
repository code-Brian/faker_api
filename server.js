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
        name: faker.company.companyName().companySuffix(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany
}

app.get('/api/users/new', (req, res) => {
    res.json(createUser())
})

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany())
})

app.get('/api/user/company', (req,res) => {
    const user = createUser()
    const company = createCompany()
    res.json({user: user, company: company})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) )