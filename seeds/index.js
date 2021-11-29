const seedFoods = require('./foods-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedFoods();
}

seedAll();
