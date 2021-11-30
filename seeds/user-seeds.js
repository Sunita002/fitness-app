const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    height: 72,
    startWeight: 210,
    goalWeight: 225,
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    height: 60,
    startWeight: 95,
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    height: 66,
    startWeight: 140,
    goalWeight: 135,
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    height: 70,
    startWeight: 286,
    goalWeight: 260,
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    height: 74,
    startWeight: 265,
    goalWeight: 265,
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    height: 72,
    startWeight: 180,
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    height: 64,
    startWeight: 105,
    goalWeight: 95,
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    height: 68,
    startWeight: 145,
    goalWeight: 140,
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    height: 68,
    startWeight: 210,
    goalWeight: 155,
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    height: 66,
    startWeight: 154,
    goalWeight: 135,
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;