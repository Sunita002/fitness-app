const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    age: 33,
    height: 72,
    start_weight: 210,
    goal_weight: 225,
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    age: 17,
    height: 60,
    start_weight: 95,
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    age: 46,
    height: 66,
    start_weight: 140,
    goal_weight: 135,
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    age: 55,
    height: 70,
    start_weight: 286,
    goal_weight: 260,
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    age: 35,
    height: 74,
    start_weight: 265,
    goal_weight: 265,
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    age: 23,
    height: 72,
    start_weight: 180,
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    age: 29,
    height: 64,
    start_weight: 105,
    goal_weight: 95,
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    age: 39,
    height: 68,
    start_weight: 145,
    goal_weight: 140,
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    age: 24,
    height: 68,
    start_weight: 210,
    goal_weight: 155,
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    age: 40,
    height: 66,
    start_weight: 154,
    goal_weight: 135,
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
