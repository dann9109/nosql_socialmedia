const { User } = require('../models');
const connection = require('./connection');

const { faker } = require('@faker-js/faker');

const userData = [];

let userCount = 50;

while (userCount--) {
    const userName = faker.internet.userName();

    userData.push({
        username: userName,
        email: `${userName}@test.com`,
        password: 'password123'
    });
}

User.deleteMany({})
    .then(() => {
        console.log('Users seeded successfully')
    });